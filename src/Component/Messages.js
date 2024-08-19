
import React, { useEffect, useRef } from "react";

const Messages = ({ user, selectedUser, messages }) => {

  const messagesEndRef = useRef(null);
    // Scroll to bottom whenever messages change
    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

  return (
    <div className="chat-messages">
      {selectedUser ? (
        messages.map(message => (
          <div 
            key={message.id} 
            className={`message ${message.sender === user.uid ? 'sent' : 'received'}`}
          >
            <p>{message.text}</p>
            <span>{new Date(message.timestamp?.toDate()).toLocaleTimeString()}</span>
          </div>
        ))
      ) : (
        <p>Select a user to start chatting</p>
      )}
      {/* This element ensures scrolling happens to the bottom */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
