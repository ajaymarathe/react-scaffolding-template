import React, { useEffect } from 'react';
import Sidebar from '../Component/Sidebar';
import Header from '../Component/Header';
import Messages from '../Component/Messages';
import MessageInput from '../Component/MessageInput';
import { useLocation, useNavigate } from 'react-router-dom';

function ChatApp() {
  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(location.state?.user);


  useEffect(() => {
    if (!user) {
      // If no user is passed, redirect to login
      navigate('/');
    }
  }, [user, navigate]);



  return (
    <div className="chat-container">
      <Sidebar user={user} />
      <div className="chat-window">
      <Header user={user} />
      <Messages />
        <MessageInput />
      </div>
    </div>
  );
}


export default ChatApp;
