export interface Operations {
  url: string;
  method: string;
  qs: { [key: string]: string | boolean };
}

export const API_OPS = {
  getListsFromBoard: (boardId: string) => ({
    url: `https://api.trello.com/1/boards/${boardId}/lists`,
    method: "GET",
    qs: {
      cards: "open",
      card_fields: "name,idMembers,desc,due,labels,id,closed,dateLastActivity",
      fields: "name",
    },
  }),

  getBoardDetails: (boardId: string) => ({
    url: `https://api.trello.com/1/boards/${boardId}`,
    method: "GET",
    qs: {
      fields: "name",
    },
  }),

  getBoardMembers: (boardId: string) => ({
    url: `https://api.trello.com/1/boards/${boardId}/members`,
    method: "GET",
    qs: {},
  }),
};
