import { ResponseError } from ".";
import { API_OPS, Operations } from "./_APIOperations";
import { HEADERS } from "./_header";

const baseOAuthURL = "https://api.atlassian.com";

export const oAuthDomainURL = (cloudID: string) =>
  `${baseOAuthURL}/ex/jira/${cloudID}/`;
export const basicDomainURL = (domainName: string) =>
  `https://${domainName}.atlassian.net`;

/**
 * Send a request to Jira's API
 *
 * @param domain - The Jira domain name
 * @param operation - What HTTP method and Jira API endpoint to use
 * @param headers - Request headers
 * @param body - Optional Request body
 * @returns response from the Jira API
 *
 * @example
 *    callAPI("iwanttotestthis", API_OPS.getIssues(projectKey), Headers.basicAuthHeader(token))
 */
export function callAPI(
  domain: string,
  operation: Operations,
  headers: Headers,
  body?: string,
): Promise<
  | { data: any }
  | {
    response: any;
  }
> {
  let url = domain + operation.endpoint;

  let result = fetch(url, {
    method: operation.method,
    headers: headers,
    body: body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new ResponseError(400, "Error occurred while getting data from Jira");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return {
        response: error.statusText,
      };
    });

  return result;
}

interface IJiraSite {
  id: string;
  name: string;
  url: string;
  scopes: string[];
  avatarUrl: string;
}

export async function getCloudID(
  oAuthToken: string,
  domainName: string,
): Promise<string | undefined> {
  let response = await callAPI(
    baseOAuthURL,
    API_OPS.getAccessibleResources(),
    HEADERS.authHeader(oAuthToken),
  );

  if (!Array.isArray(response) || response.length === 0) {
    return undefined;
  }

  let searchResult = response as IJiraSite[];
  let url = basicDomainURL(domainName);
  let result = searchResult.find((resource) => resource.url === url);

  return result ? result.id : undefined;
}
