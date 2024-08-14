import { useEffect } from "react";

export function Receiver() {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080"); //url to web server
    
    socket.onopen = () => {
        console.log("Connection opened from receiver");
        socket.send(
          JSON.stringify({ 
            type: "receiver",
      }),
      );
    };
    startReceiving(socket);
    },
    []);

  function startReceiving(socket: WebSocket) {
    const video = document.createElement("video");
    document.body.appendChild(video);

    const pc = new RTCPeerConnection();
    pc.ontrack = (event) => {
      console.log(event);
      video.srcObject = new MediaStream([event.track]);
      video.play();
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "createOffer") { //6 -> browser 2 receives the offer, 7-> brwoser 2 creates the answer
        pc.setRemoteDescription(message.sdp).then(() => {     // 9, 10 -> Browser 1 receives the answer and sets the remote description
          pc.createAnswer().then((answer) => {
            pc.setLocalDescription(answer);
            socket.send(
              JSON.stringify({
                type: "createAnswer",
                sdp: answer,              // 8 browser 2 sets the local description  to be the answer
              }),
            );
          });
        });
      } else if (message.type === "iceCandidate") {
        pc.addIceCandidate(message.candidate);
      }
    };
  }

  return (
    <div>
      <h1> Receiver</h1>
    </div>
  );
};
