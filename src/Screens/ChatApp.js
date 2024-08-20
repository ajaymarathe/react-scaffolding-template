import React, { useEffect, useState } from "react";
import Sidebar from "../Component/Sidebar";
import Header from "../Component/Header";
import Messages from "../Component/Messages";
import MessageInput from "../Component/MessageInput";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase";

function ChatApp() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(location.state?.user);
  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!user) {
      // If no user is passed, redirect to login
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = usersSnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((u) => u.uid !== user.uid);
        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [user.uid]);

  useEffect(() => {
    if (selectedUser) {
      const messagesRef = collection(db, "messages");
      const q = query(
        messagesRef,
        where("participants", "array-contains", user.uid),
        orderBy("timestamp", "asc")
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const messagesData = snapshot.docs
          .filter((doc) => doc.data().participants.includes(selectedUser.uid)) // Filter by selected user
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
        setMessages(messagesData);
      });

      return () => unsubscribe();
    } else {
      setMessages([]); // Clear messages when no user is selected
    }
  }, [selectedUser, user.uid]); // Make sure to use user.uid here to prevent unnecessary re-renders

  const sendMessage = async (text) => {
    if (selectedUser && text.trim()) {
      try {
        await addDoc(collection(db, "messages"), {
          sender: user.uid,
          receiver: selectedUser.uid,
          participants: [user.uid, selectedUser.uid],
          text,
          timestamp: new Date(),
        });
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/"); // Redirect to login screen after logout
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="chat-container">
      <Sidebar
        users={users}
        user={user}
        onSelectUser={(u) => setSelectedUser(u)}
        onLogout={handleLogout}
      />
      <div className="chat-window">
        <Header selectedUser={selectedUser} />
        <Messages messages={messages} user={user} selectedUser={selectedUser} />
        <MessageInput onSendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default ChatApp;
