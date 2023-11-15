export interface Operations {
  endpoint: string,
  method: string
}

export const API_OPS = {
  /**
   * Get up to 50 issues for a project identified by its key.
   * 
   * @param projectKey - The project key for the Jira project
   * @param startAt - The issue to start listing from
   */
    getIssues: (projectKey: string, startAt = 0) => ({
      endpoint: `/rest/api/2/search?jql=project%20%3D%20${projectKey}&startAt=${startAt}`,
      method: "GET",
    }),
};