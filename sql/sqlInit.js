const db = require("./sqlConnection");
const messageModel = require("./messageModel");


/*
  Responsible to initiate the DB connection and define models
*/

function init() {
  db.connectToDb();
  messageModel.createMessageModel(db.dbConnection);
}



module.exports.dbConnection = db.dbConnection;
module.exports.init = init;
