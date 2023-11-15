// import { Payload } from "./payload";
import { API_OPS, Operations } from "./APIOperations";
import { Header } from "./header";

const domainURL = (domainName: string) => `https://${domainName}.atlassian.net`;

export function callAPI(
  domainName: string,
  operation: Operations,
  headers: Headers,
  body?: string
) {
  let url = domainURL(domainName) + operation.endpoint;

  let result = fetch(url, {
    method: operation.method,
    headers: headers,
    body: body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<{ data: any }>;
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return {
        response: null,
        error,
      };
    });

  return result;
}
