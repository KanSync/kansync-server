const trelloController = require("./trelloController");

trelloController
  .getBoardData()
  .then((data) => {
    console.log("Trello Board Data:", JSON.stringify(data, null, 2));
  })
  .catch((error) => {
    console.error("Error:", error);
  });
