import { IUnifiedIssue, Assignee } from "../_common";

import { List } from "./_trelloTypes";

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
        author: { name: null },
        body: card.desc,
        category: card.category,
        statusChangeTime: null,
        createdAt: new Date(card.createdDate),
        comments: [],
        lastEditedAt: new Date(card.dateLastActivity),
        dueDate: card.due ? new Date(card.due) : null,
        labels: card.labels.map(label => label.name),
      };
      unifiedIssues.push(unifiedIssue);
    });
  });

  return unifiedIssues;
}
