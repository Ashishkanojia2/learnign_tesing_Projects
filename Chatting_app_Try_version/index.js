import express from "express";
import http from "http";
import path from "path";
// const path = path();
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server); // this const  = io var handle my sockets

// when ever the connect is made then this socket have a client information and you can chanange the name client to anything
io.on("connection", (socket) => {
  //   console.log("a new user has connect ", socket.id);

  socket.on("user_message", (message) => {
    // IF ANY MESAGE RECIVE FROM SERVER |^| UPPER VALI IS LINE KA MTLB
    console.log(message); // from her serve  store all the message now we want to send these to all the clent

    io.emit("kon-sa-event-emit-krna-hai-kuch bhee-naam-dedo", message); // io means my all connection
    // THEN SEND TO ALL CLIENT   |^|  UPPER VALI IS LINE KA MTLB
  });
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile(path.resolve("./public/index.html"));
});

server.listen(9000, () => {
  console.log(`Server Started at port 9000`);
});
