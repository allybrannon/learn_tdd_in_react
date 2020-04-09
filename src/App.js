import React, { useState } from "react";
import NewMessageForm from "./components/NewMessageForm";
import MessageList from "./components/MessageList";

import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const handleSend = (newMessage) => {
    setMessages([newMessage, ...messages]);
  };
  return (
    <div className="App">
      <h1>Hello, ALLY!</h1>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </div>
  );
}

export default App;
