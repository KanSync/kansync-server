import { IUnifiedIssue, Assignee } from "../common";

import { List } from "./trelloTypes";

export function convertTrelloDataToUnifiedIssues(
  lists: List[],
): IUnifiedIssue[] {
  let unifiedIssues: IUnifiedIssue[] = [];

  /*
   * Trello doesn't provide author, statusChangeTime nor dependencies.
   */
  lists.forEach((list) => {
    list.cards.forEach((card) => {
      const unifiedIssue: IUnifiedIssue = {
        title: card.name || "Default Title",
        assignees: card.memberNames.map((name) => ({ name } as Assignee)),
        author: { name: "Unknown" },
        body: card.desc,
        category: card.category,
        statusChangeTime: null,
        createdAt: card.createdDate,
        comments: [],
        lastEditedAt: card.dateLastActivity,
        projectID: null,
        dueDate: card.due || null,
        labels: card.labels.map(label => label.name),
        dependencies: [],
      };
      unifiedIssues.push(unifiedIssue);
    });
  });

  return unifiedIssues;
}
