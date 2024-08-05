import { useState, useEffect } from "react";

export function Sender() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [pc, setPc] = useState<RTCPeerConnection | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080"); // url to web server
    setSocket(socket);
    socket.onopen = () => {
      console.log("Connection opened from sender");

      socket.send(
        JSON.stringify({
          type: "sender",
        }),
      );
    };
  }, []);

  const initiateConn = async () => {
    if (!socket) {
      alert("Socket not found");
      return;
    }

    socket.onmessage = async (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "createAnswer") {
        await pc.setRemoteDescription(message.sdp); // 5. Browser 2 receives the offer and sets the remote description
      } else if (message.type === "iceCandidate") {
        pc.addIceCandidate(message.candidate);
      }
    };

    const pc = new RTCPeerConnection(); //  1. Browser 1 creates an RTCPeerConnection
    setPC(pc);
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket?.send(
          JSON.stringify({
            type: "iceCandidate",
            candidate: event.candidate,
          }),
        );
      }
    };

    pc.onnegotiationneeded = async () => {
      console.error("onnegotiateion needed");
      const offer = await pc.createOffer(); //2. Browser 1 creates an offer
      await pc.setLocalDescription(offer); // 3. tells that we are sending the offer, sdp, sets localDescription to offer,

      socket?.send(
        // 4. sends the offer to the receiver
        JSON.stringify({
          type: "createOffer",
          sdp: pc.localDescription,
        }),
      );
    };

    getCameraStreamAndSend(pc);
  };

  // camera logic added
  const getCameraStreamAndSend = (pc: RTCPeerConnection) => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      const video = document.createElement("video");
      video.srcObject = stream;
      video.play();
      // this is wrong, should propogate via a component
      document.body.appendChild(video);
      stream.getTracks().forEach((track) => {
        console.error("track added");
        console.log(track);
        console.log(pc);
        pc?.addTrack(track);
      });
    });
  };

  return (
    <div>
      Sender
      <button onClick={initiateConn}> Send data </button>
    </div>
  );
}
