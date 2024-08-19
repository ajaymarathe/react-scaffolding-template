import React from "react";

const Messages = () => {
  return (
    <div className="chat-messages">
      <div className="message received">
        <p>Hello!</p>
        <span>10:00 AM</span>
      </div>
      <div className="message sent">
        <p>Hi! How are you?</p>
        <span>10:02 AM</span>
      </div>
    </div>
  );
};

export default Messages;
