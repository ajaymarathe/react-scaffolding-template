
import React from "react";

const Messages = ({ user, selectedUser, messages }) => {

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
    </div>
  );
};

export default Messages;
