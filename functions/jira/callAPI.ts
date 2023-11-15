import { Operations } from "./APIOperations";

const domainURL = (domainName: string) => `https://${domainName}.atlassian.net`;

/**
 * Send a request to Jira's API
 *
 * @param domainName - The Jira domain name
 * @param operation - What HTTP method and Jira API endpoint to use
 * @param headers - Request headers
 * @param body - Optional Request body
 * @return response from the Jira API
 *
 * @example
 *    callAPI("iwanttotestthis", API_OPS.getIssues(projectKey), Headers.basicAuthHeader(token, email))
 */
export function callAPI(
  domainName: string,
  operation: Operations,
  headers: Headers,
  body?: string
): Promise<{ data: any }
  | {
    response: any;
  }> {
  let url = domainURL(domainName) + operation.endpoint;

  let result = fetch(url, {
    method: operation.method,
    headers: headers,
    body: body,
  })
    .then((response) => {
      if (!response.ok) {
        throw response;
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
