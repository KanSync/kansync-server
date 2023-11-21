import { callAPI } from "./callAPI";
import { API_OPS } from "./APIOperations";
import { Request, Response } from "express";
import { convertTrelloDataToUnifiedIssues } from './conversion';

import { List, Card, Member } from "./trelloTypes"


export default async (req: Request, res: Response) => {
  const boardId = req.query.boardId as string;
  const apiKey = req.query.apiKey as string;
  const apiToken = req.query.apiToken as string;

  if (!boardId || !apiKey || !apiToken) {
    res
      .status(400)
      .send(`Missing required parameters: boardId, apiKey, or apiToken.`);
    return;
  }

  try {
    const boardData = await getBoardData(boardId, apiKey, apiToken);
    res.status(200).send(boardData);
  } catch (error) {
    console.error("Error fetching board data:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
};

export async function getBoardData(
  boardId: string,
  apiKey: string,
  apiToken: string
): Promise<{ boardName: string; lists: List[]; totalCardCount: number }> {
  try {
    const boardName = await getBoardName(boardId, apiKey, apiToken);
    let lists = await getListsFromBoard(boardId, apiKey, apiToken);
    lists = await populateMemberNamesInLists(lists, boardId, apiKey, apiToken);
    const totalCardCount = getTotalCardCount(lists);

    return { boardName, lists, totalCardCount };
  } catch (error) {
    console.error("Error fetching board data:", error);
    throw error;
  }
}

async function getBoardName(
  boardId: string,
  apiKey: string,
  apiToken: string
): Promise<string> {
  const boardDetails = await callAPI(
    API_OPS.getBoardDetails(boardId),
    apiKey,
    apiToken
  );
  return boardDetails.name;
}

async function getListsFromBoard(
  boardId: string,
  apiKey: string,
  apiToken: string
): Promise<List[]> {
  return await callAPI(API_OPS.getListsFromBoard(boardId), apiKey, apiToken);
}

function getCardCreationDate(cardId: string): Date {
  const timestamp = parseInt(cardId.substring(0, 8), 16);
  return new Date(timestamp * 1000);
}

function getTotalCardCount(lists: List[]): number {
  return lists.reduce((total, list) => total + list.cards.length, 0);
}

async function populateMemberNamesInLists(
  lists: List[],
  boardId: string,
  apiKey: string,
  apiToken: string
): Promise<List[]> {
  const memberNames = await getMemberNames(boardId, apiKey, apiToken);
  lists.forEach((list) => {
    list.cards.forEach((card) => {
      card.memberNames = card.idMembers.map(
        (id) => memberNames[id] || "Unknown"
      );
      card.createdDate = getCardCreationDate(card.id);
      //card.category = list.name;
      card.assignedCount = card.idMembers.length;
      card.isClosed = card.isClosed;
    });
  });
  return lists;
}

async function getMemberNames(
  boardId: string,
  apiKey: string,
  apiToken: string
): Promise<{ [key: string]: string }> {
  const members: Member[] = await callAPI(
    API_OPS.getBoardMembers(boardId),
    apiKey,
    apiToken
  );
  return members.reduce<{ [key: string]: string }>((acc, member) => {
    acc[member.id] = member.fullName;
    return acc;
  }, {});
}

getBoardData(BOARD_ID, API_KEY, API_TOKEN)
  .then(data => {
    console.log('Board Data:', JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error('Error:', error);
  });

async function fetchAndProcessTrelloData() {
  try {
    const trelloData = await getBoardData(BOARD_ID, API_KEY, API_TOKEN);
    const unifiedIssues = convertTrelloDataToUnifiedIssues(trelloData.lists);
    console.log('Unified Issues:', JSON.stringify(unifiedIssues, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchAndProcessTrelloData();

