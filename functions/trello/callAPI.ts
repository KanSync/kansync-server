import { Operations } from "./APIOperations";
import rp from 'request-promise';

export function callAPI(
  operation: Operations,
  apiKey: string,
  apiToken: string
): Promise<any> {
  let options = {
    method: operation.method,
    url: operation.url,
    qs: {
      ...operation.qs,
      key: apiKey,
      token: apiToken,
    },
    json: true,
  };

  return rp(options)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error in callAPI:", error);
      throw error;
    });
}

