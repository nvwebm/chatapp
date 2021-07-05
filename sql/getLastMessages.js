const dbConnection = require("./sqlInit").dbConnection;


/*
  Responsible to fetch the last messages from DB
*/

async function getLastMessages() {
  const Message = dbConnection.models.Message;
  return (await Message.findAll({
    order: [["id", "desc"]],
    limit: 10,
    raw: true,
  })).reverse();
}

module.exports.getLastMessages = getLastMessages;
