import React from "react";
import ChatItem from "./ChatItem";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faComments, faEllipsisV, faCircleNotch } from '@fortawesome/free-solid-svg-icons';


function Sidebar({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/'); // Redirect to login screen after logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src={user?.photoURL || "https://via.placeholder.com/40"}
          alt="Profile"
          className="profile-pic"
        />
        <h2>{user?.displayName || "User Name"}</h2>
        <div className="header-icons">
          <FontAwesomeIcon icon={faCircleNotch} />
          <FontAwesomeIcon icon={faComments} />
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>
      <div className="chat-list">
        <ChatItem name="Contact 1" lastMessage="Hey! How are you?" />
        <ChatItem name="Contact 2" lastMessage="Let's meet tomorrow." />
        <ChatItem name="Contact 3" lastMessage="Sure, see you!" />
      </div>
      <div className="sidebar-footer">
        <button className="logout-button" onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
