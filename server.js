const httpServer = require("http").createServer();
const express = require('express');
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "https://infinite-savannah-52075.herokuapp.com",
  },
});

const handleNewConnection = (require('./socket/handleNewConnection')).handleNewConnection;


const db = require("./sql/sqlInit");
db.init();

io.use((socket, next) => {
  const nickname = socket.handshake.auth.nickname;
  if (!nickname) {
    return next(new Error("invalid nickname"));
  }
  socket.nickname = nickname;
  next();
});

io.on("connection", handleNewConnection);

httpServer.listen(4000);


const app = express();
app.use(express.static('public'));
app.listen(80, () => console.log(`Server listening on port: 8000`));