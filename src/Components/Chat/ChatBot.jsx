import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import MessageArea from './MessageArea';

function ChatBot() {

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you summarize a video today?",
      sender: "ai",
      timestamp: new Date().toISOString()
    }
  ]);

  const handleSendMessage = (messageText) => {
    if (!messageText.trim()) return;
    
    const userMessage = {
      id: messages.length + 1,
      text: messageText,
      sender: "user",
      timestamp: new Date().toISOString()
    };
    
    setMessages([...messages, userMessage]);
    
      const aiMessage = {
        id: messages.length + 2,
        text: getAiResponse(messageText),
        sender: "ai",
        timestamp: new Date().toISOString()
      };
      
      setMessages(prevMessages => [...prevMessages, aiMessage]);
  };
  
  const getAiResponse = (userMessage) => {
   
      return "I'm here to help summarize videos. Upload a video file?";
    
  };

  return (
    <div className="flex flex-col h-screen items-center justify-between p-3 bg-blue-100" >
      <ChatHeader />
      <div className="w-full max-w-4xl flex-grow flex flex-col pb-4">
        <MessageArea messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default ChatBot;