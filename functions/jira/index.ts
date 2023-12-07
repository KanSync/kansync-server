import { basicDomainURL, callAPI, getCloudID, oAuthDomainURL } from "./callAPI";
import { API_OPS } from "./APIOperations";
import { HEADERS } from "./header";
import { Request, Response } from "express";
import { toUnified } from "./conversion";

class ResponseError extends Error {
  constructor(public status: number, m: string) {
    super(m);
  }
}

async function getDomainHeader(
  token: string,
  tokenType: string,
  domainName: string,
): Promise<[string, Headers]> {
  let domainURL: string;
  let authHeader: Headers;

  if (tokenType === "Bearer") {
    authHeader = HEADERS.authHeader(token);
    let cloudID = await getCloudID(token, domainName);

    if (cloudID === undefined) {
      throw new ResponseError(400, "Failed getting cloud ID.");
    }
    domainURL = oAuthDomainURL(cloudID);
  } else if (tokenType === "Basic") {
    authHeader = HEADERS.basicAuthHeader(token);
    domainURL = basicDomainURL(domainName);
  } else {
    throw new ResponseError(403, "Invalid token.");
  }
  return [domainURL, authHeader];
}

/**
 * Endpoint to get all issues for a Jira project
 */
export default async (req: Request, res: Response) => {
  let reqAuthHeader = req.headers.authorization;

  if (reqAuthHeader === undefined) {
    res.status(403).send(`Missing authorization header.`);
    return;
  }

  let [tokenType, token] = reqAuthHeader.split(" ");
  let domainName = req.query.name;
  let projectKey = req.query.projectKey;

  if (
    token === undefined ||
    domainName === undefined ||
    projectKey === undefined
  ) {
    res.status(400).send(`Missing token, domain name or project key.`);
    return;
  }

  // These are parsed from queries and can therefore be a string or undefined.
  domainName = domainName as string;
  projectKey = projectKey as string;

  let domainURL: string;
  let authHeader: Headers;

  try {
    [domainURL, authHeader] = await getDomainHeader(
      token,
      tokenType,
      domainName,
    );
  } catch (error) {
    res.status(error.status).send(error.message);
    return;
  }

  let starting_issue = 0;
  let issues = [];
  let result;

  // Jira will only return a set amount of issues (standard 50). This loop handles multiple pages of issues.
  do {
    result = await callAPI(
      domainURL,
      API_OPS.getIssues(projectKey, starting_issue),
      authHeader,
    );

    if (result.startAt === undefined) {
      res.status(400).send(result);
      return;
    }

    issues = issues.concat(result.issues);
    starting_issue += result.maxResults;
  } while (result.startAt + result.maxResults < result.total);

  issues = issues.map((issue) => toUnified(issue));

  res.status(200).send({ num: issues.length, issues: issues });
};
