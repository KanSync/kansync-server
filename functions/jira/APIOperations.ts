export interface Operations {
  endpoint: string;
  method: string;
}

const fields = [
  "creator",
  "assignee",
  "description",
  "status",
  "statuscategorychangedate",
  "project",
  "created",
  "updated",
  "comment",
  "duedate",
  "labels",
  "summary",
  "subtasks",
];

export const API_OPS = {
  /**
   * Get up to 50 issues for a project identified by its key.
   *
   * @param projectKey - The project key for the Jira project
   * @param startAt - The issue to start listing from
   */
  getIssues: (projectKey: string, startAt = 0) => ({
    endpoint: `/rest/api/2/search?jql=project%20%3D%20${projectKey}&startAt=${startAt}&fields=${fields.join(
      ",",
    )}`,
    method: "GET",
  }),
  getAccessibleResources: () => ({
    endpoint: "/oauth/token/accessible-resources",
    method: "GET",
  }),
};
