import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import MessageArea from './MessageArea';
import FileModal from '../FileUpload/FileModal';

function ChatBot() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you summarize a video today?",
      sender: "ai",
      timestamp: new Date().toISOString()
    }
  ]);

  // Function to handle sending a text message
  const handleSendMessage = (messageText) => {
    if (!messageText.trim()) return;
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      timestamp: new Date().toISOString()
    };
    
    setMessages([...messages, userMessage]);
    
    // Simulate AI response with a slight delay
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        text: getAiResponse(messageText),
        sender: "ai",
        timestamp: new Date().toISOString()
      };
      
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    }, 800);
  };
  
  // Function to handle file uploads
  const handleFileUpload = (file) => {
    const userMessage = {
      id: Date.now(),
      text: `I've uploaded "${file.name}" for summarization.`,
      sender: "user",
      timestamp: new Date().toISOString()
    };
    
    setMessages([...messages, userMessage]);
    
    setTimeout(() => {
      const processingMessage = {
        id: Date.now() + 1,
        text: `I'm analyzing "${file.name}" now. This will take a moment...`,
        sender: "ai",
        timestamp: new Date().toISOString()
      };
      
      setMessages(prevMessages => [...prevMessages, processingMessage]);
      
      setTimeout(() => {
        const summaryMessage = {
          id: Date.now() + 2,
          text: generateVideoSummary(file.name),
          sender: "ai",
          timestamp: new Date().toISOString()
        };
        
        setMessages(prevMessages => [...prevMessages, summaryMessage]);
      }, 3000);
    }, 1000);
  };
  
  const getAiResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return "Hello! I'm your AI video assistant. Would you like to upload a video for me to summarize?";
    } else if (lowerCaseMessage.includes('summarize') || lowerCaseMessage.includes('video')) {
      return "I'd be happy to summarize a video for you. Please click the 'Add MP4 File' button to upload your video.";
    } else if (lowerCaseMessage.includes('thank')) {
      return "You're welcome! Let me know if you need anything else.";
    } else {
      return "I'm here to help summarize videos. Would you like to upload a video file?";
    }
  };
  
  // Generate a fake video summary
  const generateVideoSummary = (filename) => {
    return `Here's a summary of "${filename}":\n\n` +
      "• The video begins with an introduction to the main topic\n" +
      "• Key points discussed include technical aspects, methodology, and practical applications\n" +
      "• The presenter demonstrates several examples to illustrate the concepts\n" +
      "• There's a Q&A section at approximately 15:45 where common questions are addressed\n" +
      "• The video concludes with a summary of the main points and suggestions for further learning\n\n" +
      "Would you like me to focus on any specific part of this summary?";
  };

  return (
    <div className="flex flex-col h-screen items-center justify-between p-3">
      <ChatHeader />
      <div className="w-full max-w-4xl flex-grow flex flex-col pb-4">
        <MessageArea messages={messages} />
        <MessageInput 
          onSendMessage={handleSendMessage} 
          onAttachmentClick={() => setIsModalOpen(true)}
        />
      </div>
      
      <FileModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onFileUpload={handleFileUpload}
      />
    </div>
  );
}

export default ChatBot;