import rp = require('request-promise');
import * as _ from 'lodash';

const BOARD_ID = "";
const API_KEY = "";
const API_TOKEN = "";

interface Member {
  id: string;
  fullName: string;
}

interface Card {
  idMembers: string[];
  memberNames?: string[];
}

interface List {
  cards: Card[];
}

export async function getBoardData(): Promise<{ boardName: string; lists: List[] }> {
  try {
    const boardName = await getBoardName();
    const lists = await getListsFromBoard();
    const cardsWithMembers = await getCardsWithMemberNames(lists);
    return { boardName, lists: cardsWithMembers };
  } catch (error) {
    console.error("Error fetching board data:", error);
    throw error;
  }
}

async function getListsFromBoard(): Promise<List[]> {
  const options = {
    method: "GET",
    url: `https://api.trello.com/1/boards/${BOARD_ID}/lists`,
    qs: {
      cards: "open",
      card_fields: "name,idMembers,desc,due,labels",
      fields: "name",
      key: API_KEY,
      token: API_TOKEN,
    },
    json: true,
  };
  return await rp(options);
}

async function getCardsWithMemberNames(lists: List[]): Promise<List[]> {
  const memberNames = await getMemberNames();
  lists.forEach((list) => {
    list.cards.forEach((card) => {
      card.memberNames = card.idMembers.map(
        (id) => memberNames[id] || "Unknown"
      );
    });
  });
  return lists;
}

async function getBoardName(): Promise<string> {
  const options = {
    method: "GET",
    url: `https://api.trello.com/1/boards/${BOARD_ID}`,
    qs: {
      fields: "name",
      key: API_KEY,
      token: API_TOKEN,
    },
    json: true,
  };
  const boardDetails = await rp(options);
  return boardDetails.name;
}

async function getMemberNames(): Promise<{ [key: string]: string }> {
    const options = {
      method: "GET",
      url: `https://api.trello.com/1/boards/${BOARD_ID}/members`,
      qs: { key: API_KEY, token: API_TOKEN },
      json: true,
    };
    const members: Member[] = await rp(options);
    return members.reduce<{ [key: string]: string }>((acc, member) => {
      acc[member.id] = member.fullName;
      return acc;
    }, {});
  }
  