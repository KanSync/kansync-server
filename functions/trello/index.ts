import { callAPI } from "./callAPI";
import { API_OPS } from "./APIOperations";

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

export async function getBoardData(
  boardId: string,
  apiKey: string,
  apiToken: string
): Promise<{ boardName: string; lists: List[] }> {
  try {
    const boardName = await getBoardName(boardId, apiKey, apiToken);
    const lists = await getListsFromBoard(boardId, apiKey, apiToken);
    const listsWithMemberNames = await populateMemberNamesInLists(
      lists,
      boardId,
      apiKey,
      apiToken
    );
    return { boardName, lists: listsWithMemberNames };
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
