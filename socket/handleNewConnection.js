const getLastMessages = require("../sql/getLastMessages").getLastMessages;
const handleNewMessage = require("./handleNewMessage").handleNewMessage;

/*
  Responsible to handle new user connection logic

  returns the last messages saved on DB
*/

async function handleNewConnection(socket) {
  handleNewMessage(socket);
  const messages = await getLastMessages();
  socket.emit("old-messages", messages);
}

module.exports.handleNewConnection = handleNewConnection;
