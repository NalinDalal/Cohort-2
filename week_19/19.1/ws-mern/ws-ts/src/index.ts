import WebSocket, { WebSocketServer } from "ws";
import http from "http";

const server = http.createServer(function (request: any, response: any) {
  console.log(new Date() + " Received request for " + request.url);
  response.end("hi there" + " " + new Date());
});

const wss = new WebSocketServer({ server });

//log no of user connected
let userCount = 0;

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
  console.log("user connected", ++userCount);
  ws.send("Hello! Message From Server!!");
});

server.listen(8080, function () {
  console.log(new Date() + " Server is listening on port 8080");
});
