import React, { useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faComments,
  faEllipsisV,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { collection, getDocs } from "firebase/firestore";

function Sidebar({ user }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  console.log("users", users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = usersSnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((u) => u.uid !== user.uid); // Filter out the current logged-in user
        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [user]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/"); // Redirect to login screen after logout
    } catch (error) {
      console.error("Error during logout:", error);
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
        {users.map((u) => {
          console.log('u:', u)
          return (
            <ChatItem
              key={`${u.uid}_${u.displayName}`}
              name={u.displayName}
              lastMessage="Say hello!"
              photoURL={u?.photoURL}
            />
          );
        })}
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
