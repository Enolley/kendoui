import React, { useState } from "react";
import ChatAI from "./ChatAI"; 
import { SvgIcon } from '@progress/kendo-react-common';
import {commentIcon, }from '@progress/kendo-svg-icons'; 
import { Button } from "@progress/kendo-react-buttons";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
   
      <Button
        className="position-fixed bottom-3 end-3 p-3 rounded-circle shadow bg-custom text-white "
        style={{ bottom: "20px", right: "20px", zIndex: 1000 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        
         <SvgIcon icon={commentIcon} size="large" />
      </Button>

      
      {isOpen && (
        <div
          className="position-fixed border rounded shadow-lg"
          style={{
            bottom: "80px",
            right: "20px",
            width: "320px",
            background: "white",
            zIndex: 999,
          }}
        >
          <ChatAI />
        </div>
      )}
    </>
  );
}

export default ChatWidget;
