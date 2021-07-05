const createNewMessage = (require('../sql/createNewMessage')).createNewMessage;

/*
  Responsible for handling new message from user:

  Broadcasts the message to other users

  Saves the message in the DB
*/


function handleNewMessage(socket) {
  socket.on("new-sender-message", ({ nickname, message }) => {
  
    socket.broadcast.emit("new-message", {
      message,
      nickname,
      id: Math.floor(Math.random() * 100),
    });
    createNewMessage(message, nickname);
  });

}

module.exports.handleNewMessage = handleNewMessage;
