import { Assignee, IUnifiedIssue } from "../_common";

/**
 * Convert Jira issue to unified format
 * 
 * @param issue - Jira issue
 * @returns Jira issue in unified format
 */
export function toUnified(issue: any): IUnifiedIssue {
  let unifiedIssue: IUnifiedIssue = {
    title: issue.fields.summary,
    assignees: ((name = issue.fields.assignee?.displayName) => (name ? [{ name: name } as Assignee] : []))(),
    author: { name: issue.fields.creator.displayName },
    body: issue.fields.description,
    category: issue.fields.status.statusCategory.name,
    statusChangeTime: new Date(issue.fields.statuscategorychangedate),
    createdAt: new Date(issue.fields.created),
    comments: issue.fields.comment.comments.map(comment => comment.body),
    lastEditedAt: new Date(issue.fields.updated),
    dueDate: issue.fields.duedate ? new Date(issue.fields.duedate) : null,
    labels: issue.fields.labels,
  }
  return unifiedIssue;
}