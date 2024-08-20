import React from "react";

function Header({ selectedUser }) {
  return (
    <div className="chat-header">
      {selectedUser && (
        <>
          <img
            src={selectedUser.photoURL}
            className="headerLogo"
            alt={selectedUser.photoURL}
          />
          <p>{selectedUser.displayName}</p>
        </>
      )}
    </div>
  );
}

export default Header;
