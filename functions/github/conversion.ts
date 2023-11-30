import { Assignee, IUnifiedIssue } from '../common';
import { IGithubIssue } from "./interfaces";

/**
 * Convert GitHub issue to unified format
 * 
 * @param issue - GitHub issue
 * @returns GitHub issue in unified format
 */
export function toUnified(issue: IGithubIssue): IUnifiedIssue {
  let unifiedIssue: IUnifiedIssue = {
    title: issue.content.title,
    assignees: issue.content.assignees.nodes.map(assignee => { return { name: assignee.login } as Assignee }),
    author: { name: issue.content.author.login },
    body: issue.content.body,
    category: issue.status.column,
    statusChangeTime: issue.status.updatedAt ? new Date(issue.status.updatedAt) : null,
    createdAt: new Date(issue.content.createdAt),
    comments: issue.content.comments.nodes.map(comment => comment.body),
    lastEditedAt: issue.content.lastEditedAt ? new Date(issue.content.lastEditedAt) : null,
    projectID: issue.project.id, // TODO: Make sure this id is unique
    dueDate: issue.content.milestone && issue.content.milestone.dueOn ? new Date(issue.content.milestone.dueOn) : null,
    labels: issue.content.labels.nodes.map(label => label.name),
  }
  return unifiedIssue;
}