const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const path = require("path");

// intializations
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// settings
const port = process.env.PORT || 3000;

// sockets
require("./sockets")(io);

// static files
app.use(express.static(path.join(__dirname, "public")));

// starting the server
server.listen(port, () => {
  console.log("Server on port", port);
});
