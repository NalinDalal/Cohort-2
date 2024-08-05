import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let senderSocket: null | WebSocket = null; // to store the sender socket, cache them globally
let receiverSocket: null | WebSocket = null; // to store the receiver socket, cache them globally

wss.on("connection", function connection(ws) {
  //WebSocketServer initialized
  ws.on("error", console.error);

  ws.on("message", function message(data: any) {
    const message = JSON.parse(data); //create a socket available globally,
    if (message.type === "identify-as-sender") {
      //whenever someone tells us they are sender, store the socket instance globally
      senderSocket = ws; //send senderSocket to ws
    } else if (message.type === "identify-as-receiver") {
      // someone tells us they are receiver, store the socket instance globally
      receiverSocket = ws; //send receiverSocket to ws
    } else if (message.type === "create-offer") {
      // if the message type is create-offer, it is by-default from sender, so forward it to receiver socket
      //check if receiverSocket is null or not->

      if (receiverSocket !== null) {
        receiverSocket.send(
          JSON.stringify({ type: "offer", offer: message.offer }),
        );
      } else {
        // Handle the case where receiverSocket is null
        console.error("receiverSocket is null");
      }

      //if offer is created, forward it to other side(receiver)
    } else if (message.type === "create-answer") {
      receiverSocket?.send(
        JSON.stringify({ type: "answer", offer: message.offer }),
      );
      //if answer is created, forward it to original side(sender)
    }
  });

  ws.send("something");
});
