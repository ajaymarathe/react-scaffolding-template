import React from "react";

function Header({ user }) {
  return (
    <div className="chat-header">
      <h2>Chat</h2>
      {user && <p>Logged in as {user.displayName}</p>}
    </div>
  );
}

export default Header;
