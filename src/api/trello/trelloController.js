const rp = require("request-promise");
const _ = require("lodash");

// Trello API credentials and Board ID (replace these with your actual credentials and board ID)
const BOARD_ID = "Ww29cKco";
const API_KEY = "";
const API_TOKEN = "";
/**
 * Fetches the board name along with all cards from a Trello board and returns detailed information about each card, including the board's name.
 * @returns {Promise<Object>} A promise that resolves to an object containing the board's name and an array of card details.
 */
async function getBoardData() {
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

/**
 * Fetches all lists and their cards from the Trello board.
 * @returns {Promise<Array>} A promise that resolves to an array of lists with their cards.
 */
async function getListsFromBoard() {
  const options = {
    method: "GET",
    url: `https://api.trello.com/1/boards/${BOARD_ID}/lists`,
    qs: {
      cards: "open",
      card_fields: "name,idMembers,desc,due,labels", // Include additional fields here
      fields: "name",
      key: API_KEY,
      token: API_TOKEN,
    },
    json: true,
  };
  return await rp(options);
}

/**
 * Augments cards with member names.
 * @param {Array} lists - Lists containing cards.
 * @returns {Promise<Array>} A promise that resolves to an array of cards with member names.
 */
async function getCardsWithMemberNames(lists) {
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

/**
 * Fetches the name of the Trello board.
 * @returns {Promise<string>} A promise that resolves to the name of the board.
 */
async function getBoardName() {
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

/**
 * Fetches names of all members in the board.
 * @returns {Promise<Object>} A promise that resolves to an object mapping member IDs to names.
 */
async function getMemberNames() {
  const options = {
    method: "GET",
    url: `https://api.trello.com/1/boards/${BOARD_ID}/members`,
    qs: { key: API_KEY, token: API_TOKEN },
    json: true,
  };
  const members = await rp(options);
  return members.reduce((acc, member) => {
    acc[member.id] = member.fullName;
    return acc;
  }, {});
}

module.exports = { getBoardData };
