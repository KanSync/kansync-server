import { callAPI } from "./callAPI";
import { API_OPS } from "./APIOperations";
import { Request, Response } from "express";
import { convertTrelloDataToUnifiedIssues } from "./conversion";
import "dotenv/config";
import { List, Member } from "./trelloTypes";
import { handleIssueRequest } from "../common";
import { allowCors } from "../_utils/helpers";

async function handler(req: Request, res: Response) {
  let reqAuthHeader = req.headers.authorization;

  if (reqAuthHeader === undefined) {
    res.status(403).send(`Missing authorization header.`);
    return;
  }

  let [_tokenType, apiToken] = reqAuthHeader.split(" ");

  let boardId = req.query.boardId;

  const apiKey = process.env.TRELLO_KEY;

  console.log(apiToken);
  boardId = boardId as string;

  if (!boardId) {
    res.status(400).send(`Missing required parameters: boardId.`);
    return;
  }

  if (!apiKey || !apiToken) {
    res.status(500).send(`Internal server error, missing things.`);
    return;
  }

  try {
    const boardData = await getBoardData(boardId, apiKey, apiToken);
    let issues = convertTrelloDataToUnifiedIssues(boardData.lists);
    res.status(200).send({ num: boardData.totalCardCount, issues: issues });
    return issues;
  } catch (error) {
    console.error("Error fetching board data:", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
}

async function getBoardData(
  boardId: string,
  apiKey: string,
  apiToken: string,
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
  apiToken: string,
): Promise<string> {
  const boardDetails = await callAPI(
    API_OPS.getBoardDetails(boardId),
    apiKey,
    apiToken,
  );
  return boardDetails.name;
}

async function getListsFromBoard(
  boardId: string,
  apiKey: string,
  apiToken: string,
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
  apiToken: string,
): Promise<List[]> {
  const memberNames = await getMemberNames(boardId, apiKey, apiToken);
  lists.forEach((list) => {
    list.cards.forEach((card) => {
      card.memberNames = card.idMembers.map(
        (id) => memberNames[id] || "Unknown",
      );
      card.createdDate = getCardCreationDate(card.id);
      card.category = list.name;
      card.labels = card.labels;
      card.projectID = boardId;
      card.due = card.due ? new Date(card.due) : undefined;
      card.assignedCount = card.idMembers.length;
      card.isClosed = card.isClosed;
    });
  });
  return lists;
}

async function getMemberNames(
  boardId: string,
  apiKey: string,
  apiToken: string,
): Promise<{ [key: string]: string }> {
  const members: Member[] = await callAPI(
    API_OPS.getBoardMembers(boardId),
    apiKey,
    apiToken,
  );
  return members.reduce<{ [key: string]: string }>((acc, member) => {
    acc[member.id] = member.fullName;
    return acc;
  }, {});
}

async function getMembersData(
  username: string,
  apiKey: string,
  apiToken: string,
): Promise<List[]> {
  return await callAPI(API_OPS.getMembersData(username), apiKey, apiToken);
}

export default allowCors(async (req: Request, res: Response) => {
  await handleIssueRequest(req, res, handler);
});
