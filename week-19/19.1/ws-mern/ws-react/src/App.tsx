import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("Connection established");
      setSocket(socket);
    };
    socket.onmessage = (message) => {
      console.log("Message received:", message.data);
      setLatestMessage(message.data);
    };
  }, []);

  if (!socket) {
    return <div>Connecting to socket...</div>;
  }
  return (
    <>
      <input onChange={(e) => setMessage(e.target.value)}></input>
      <button
        onClick={() => {
          socket.send(message); //sends back whatever is in input box
        }}
      >
        Send
      </button>
      {latestMessage}
    </>
  );
}

export default App;
