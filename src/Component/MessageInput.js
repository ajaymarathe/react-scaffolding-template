import React, { useState } from "react";

function MessageInput({ onSendMessage }) {
  const [text, setText] = useState("");

  const handleSendMessage = () => {
    onSendMessage(text);
    setText("");
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default MessageInput;
