import React, { useState } from "react";
import { Input } from '@progress/kendo-react-inputs';


function ChatAI() {
  // Dummy messages for UI
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
    { text: "What are the latest sneaker trends?", sender: "user" },
    { text: "The latest trends include chunky soles and retro designs!", sender: "bot" },
  ]);

  const [input, setInput] = useState("");

  return (
    <div className="container mt-7 p-3">
      <h2 className="text-center">ChatAI</h2>

      {/* Chat Box */}
      <div className="chat-box border rounded p-3 mb-3" style={{ height: "400px", overflowY: "auto", background: "#f8f9fa" }}>
        {messages.map((msg, index) => (
          <div key={index} className={`d-flex ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}>
            <div
              className={`p-2 rounded mb-2 ${msg.sender === "user" ? "bg-primary text-white" : "bg-light"}`}
              style={{ maxWidth: "75%" }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

    
      <div className="d-flex">
        <Input
          type="text"
          className="form-control me-2"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-success">Send</button>
      </div>
    </div>
  );
}

export default ChatAI;
