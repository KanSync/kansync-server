import { callAPI } from "./callAPI";
import { API_OPS } from "./APIOperations";
import { HEADERS } from "./header";
import { Request, Response } from 'express'

/**
 * Endpoint to get all issues for a Jira project
 */
export default async (req: Request, res: Response) => {
  let token = req.query.token;
  let email = req.query.email;
  let domainName = req.query.name;
  let projectKey = req.query.projectKey;

  if (token === undefined || email === undefined || domainName === undefined || projectKey === undefined) {
    res.status(400).send(`Missing token, email, domain name or project key.`)
    return
  }

  token = token as string;
  email = email as string;
  domainName = domainName as string;
  projectKey = projectKey as string;

  let starting_issue = 0;
  let issues = [];
  let result;

  // Jira will only return a set amount of issues (standard 50). This loop handles multiple pages of issues.
  do {
    result = await callAPI(
      domainName,
      API_OPS.getIssues(projectKey, starting_issue),
      HEADERS.basicAuthHeader(token, email)
    );

    if (result.startAt === undefined) {
      res.status(400).send(result);
      return;
    }

    issues = issues.concat(result.issues);
    starting_issue += result.maxResults;

  } while ((result.startAt + result.maxResults) < result.total);
  res.status(200).send({ "num": issues.length, "issues": issues });
}

