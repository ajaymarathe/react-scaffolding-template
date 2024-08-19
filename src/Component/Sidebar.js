import React from "react";
import ChatItem from "./ChatItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faComments,
  faEllipsisV,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ user, users, onSelectUser, onLogout }) {
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
        {users.map((u) => {
          console.log("u:", u);
          return (
            <div
              key={`${u.uid}_${u.displayName}`}
              onClick={() => onSelectUser(u)}
            >
              <ChatItem
                name={u.displayName}
                lastMessage="Say hello!"
                photoURL={u?.photoURL}
              />
            </div>
          );
        })}
      </div>
      <div className="sidebar-footer">
        <button className="logout-button" onClick={onLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
