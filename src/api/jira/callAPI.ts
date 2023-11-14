// import { Payload } from "./payload";
import { API_OPS, Operations } from './APIOperations';
import { Header } from './header';

const domainURL = (domainName: string) => (`https://${domainName}.atlassian.net`);

export const callAPI = async (operation: Operations, headers: Header, body?: Body) => {
  let url = domainURL + operation.endpoint;
  fetch(url, {
      method: operation.method,
      headers: headers,
      body: body
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<{ data: any }>
    })
    .then(
      data => {
        return data.data
    })
    .catch((error) => {
      return {
        response: null,
        error
      }
    });
};