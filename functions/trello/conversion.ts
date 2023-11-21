import { IUnifiedIssue, Assignee } from '../common';

import { List } from "./trelloTypes";

export function convertTrelloDataToUnifiedIssues(lists: List[]): IUnifiedIssue[] {
  let unifiedIssues: IUnifiedIssue[] = [];

  lists.forEach(list => {
    list.cards.forEach(card => {
      const unifiedIssue: IUnifiedIssue = {
        title: card.name || 'Default Title',
        assignees: card.memberNames.map(name => ({ name } as Assignee)),
        author: { name: 'Unknown' }, // No author field in Trello
        body: card.desc,
        category: card.category, // NOT WORKING ATM
        statusChangeTime: new Date(),
        createdAt: card.createdDate,
        comments: [], // Not fetched
        lastEditedAt: new Date(),
        projectID: 1, // TODO
        dueDate: new Date(),
        labels: [],
        dependencies: [] // Trello doesn't have a direct equivalent
      };
      unifiedIssues.push(unifiedIssue);
    });
  });

  return unifiedIssues;
}

