import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Messages from './Messages';
import MessageInput from './MessageInput';

function ChatApp() {
  return (
    <div className="chat-container">
      <Sidebar />
      <div className="chat-window">
        <Header />
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
}


export default ChatApp;
