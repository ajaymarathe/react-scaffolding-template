import React from 'react';

function ChatItem({ name, lastMessage }) {
  return (
    <div className="chat-item">
      <div className="chat-info">
        <h3>{name}</h3>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
}

export default ChatItem;
