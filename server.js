const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
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
