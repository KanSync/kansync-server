import { HEADERS } from "./header";

export interface Operations {
  endpoint: string,
  method: string
}

export const API_OPS = {
    getIssues: (projectKey: string, startAt = 0) => ({
      endpoint: `/rest/api/2/search?jql=project%20%3D%20${projectKey}&startAt=${startAt}`,
      method: "GET",
    }),
};