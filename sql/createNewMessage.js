const dbConnection = (require('./sqlInit')).dbConnection;

/*
    Responsible to create a new Message model by parameters
*/
async function createNewMessage(message, nickname) {
    const Message = dbConnection.models.Message;
    await Message.create({ message, nickname });
}

module.exports.createNewMessage = createNewMessage;