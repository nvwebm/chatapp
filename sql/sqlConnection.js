const { Sequelize } = require("sequelize");

/*
  DB Auth details
*/

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "sql11.freesqldatabase.com",
  username: "sql11423179",
  password: "EWu4EdqY9H",
  database: "sql11423179",
});

/*
    Responsible to connect to DB
*/

async function connectToDb() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports.connectToDb = connectToDb;
module.exports.dbConnection = sequelize;
