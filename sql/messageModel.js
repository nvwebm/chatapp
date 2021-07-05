const { Sequelize, DataTypes } = require("sequelize");

/*
  Resposible to define the Message Model 

  Creates the table in case it doesn't exists
*/

function createMessageModel(dbConnection) {
  const Message = dbConnection.define(
    "Message",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  Message.sync();
}

module.exports.createMessageModel = createMessageModel;
