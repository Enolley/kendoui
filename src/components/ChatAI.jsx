import React, { useState, useEffect, useRef } from "react";
import { Input } from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import { flipVerticalIcon } from '@progress/kendo-svg-icons';
import { Button } from "@progress/kendo-react-buttons";
import { chatWithAI } from "../services/apiService";
import { useProducts } from "../context/ProductContext";

function ChatAI() {
  const { getProductsForLLM } = useProducts();
  const [messages, setMessages] = useState([
    { text: "Hello! I'm IVIATU's AI assistant. How can I help you with our shoes today?", sender: "bot" },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef(null);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;
    
    // Add user message to the chat
    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input
    setInput("");
    
    // Show loading state
    setIsLoading(true);
    
    try {
      // Get product data for context
      const products = getProductsForLLM();
      
      // Call the mock API service
      const response = await chatWithAI(input, messages, products);
      
      // Add bot response to the chat
      if (response.success) {
        setMessages(prev => [...prev, { text: response.message, sender: "bot" }]);
      } else {
        setMessages(prev => [...prev, { text: "Sorry, I couldn't process your request. Please try again.", sender: "bot" }]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { text: "Sorry, there was an error processing your request. Please try again later.", sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="container mt-7 p-3">
      <h2 className="text-center">IVIATU Assistant</h2>

      {/* Chat Box */}
      <div 
        ref={chatBoxRef}
        className="chat-box border rounded p-3 mb-3" 
        style={{ height: "400px", overflowY: "auto", background: "#f8f9fa" }}
      >
        {messages.map((msg, index) => (
          <div key={index} className={`d-flex ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}>
            <div
              className={`p-2 rounded mb-2 ${msg.sender === "user" ? "bg-pink text-white" : "bg-blue text-white"}`}
              style={{ maxWidth: "75%" }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="d-flex justify-content-start">
            <div className="p-2 rounded mb-2 bg-light" style={{ maxWidth: "75%" }}>
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="d-flex">
        <Input
          type="text"
          className="form-control me-2"
          placeholder="Ask about our shoes..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />
        <Button 
          className="btn btn-custom text-white"
          onClick={handleSendMessage}
          disabled={isLoading || input.trim() === ""}
        >
          <SvgIcon icon={flipVerticalIcon} size="medium" />
        </Button>
      </div>

      {/* Add some CSS for the typing indicator */}
      <style jsx>{`
        .typing-indicator {
          display: flex;
          align-items: center;
        }
        .typing-indicator span {
          height: 8px;
          width: 8px;
          background-color: #aaa;
          border-radius: 50%;
          margin: 0 2px;
          animation: bounce 1.2s infinite ease-in-out;
        }
        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }
        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}

export default ChatAI;