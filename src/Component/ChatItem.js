import React from "react";

function ChatItem({ name, lastMessage, photoURL }) {
  return (
    <div className="chat-item">
      <img
        src={photoURL || "https://via.placeholder.com/40"}
        alt={name}
        className="chat-item-photo"
      />
      <div className="chat-info">
        <h3>{name}</h3>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
}

export default ChatItem;
