import React from "react";
import ChatItem from "./ChatItem";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src="https://via.placeholder.com/40" // Placeholder for profile picture
          alt="Profile"
          className="profile-pic"
        />
        <h2>User Name</h2>
        <div className="header-icons">
          <i className="fas fa-circle-notch"></i> {/* Status icon */}
          <i className="fas fa-comment-alt"></i> {/* New chat icon */}
          <i className="fas fa-ellipsis-v"></i> {/* Menu icon */}
        </div>
      </div>
      <div className="chat-list">
        <ChatItem name="Contact 1" lastMessage="Hey! How are you?" />
        <ChatItem name="Contact 2" lastMessage="Let's meet tomorrow." />
        <ChatItem name="Contact 3" lastMessage="Sure, see you!" />
      </div>
    </div>
  );
}

export default Sidebar;
