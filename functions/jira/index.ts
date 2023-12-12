import { Request, Response } from "express";
import { callAPI } from "./callAPI";
import { API_OPS } from "./APIOperations";
import { HEADERS } from "./header";
import { toUnified } from "./conversion"
import { IUnifiedIssue, handleIssueRequest } from "../common";

/**
 * Endpoint to get all issues for a Jira project
 */
async function handler(req: Request, res: Response): Promise<IUnifiedIssue[] | undefined> {
  let token = req.query.token;
  let email = req.query.email;
  let domainName = req.query.name;
  let projectKey = req.query.projectKey;

  if (token === undefined || email === undefined || domainName === undefined || projectKey === undefined) {
    res.status(400).send(`Missing token, email, domain name or project key.`);
    return;
  }

  // These are parsed from queries and can therefore be a string or undefined. We have already checked that they are not undefined which is why we set them to string.
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

  issues = issues.map(issue => toUnified(issue));

  res.status(200).send({ "num": issues.length, "issues": issues });
  return issues
}

export default async (req: Request, res: Response) => {
  await handleIssueRequest(req, res, handler);
}