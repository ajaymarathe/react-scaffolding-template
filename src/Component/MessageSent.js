import React from "react";

function MessageSent({ message }) {
  return (
    <div className="message received">
      <p>{message.msg}</p>
      <span>{message.createdAt}</span>
    </div>
  );
}

export default MessageSent;