import React from 'react'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'

function ChatBot() {
  return (
    <div className='flex flex-col h-screen items-center justify-between p-3'>
      <ChatHeader/>
      <div className='width-full'>
        {/* <MessageInput /> */}
      </div>
    </div>
  )
}

export default ChatBot
