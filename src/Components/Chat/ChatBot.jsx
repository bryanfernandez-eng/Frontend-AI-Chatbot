import React from 'react'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'
import MessageArea from './MessageArea'

function ChatBot() {
  return (
    <div className='flex flex-col h-screen items-center justify-between p-3 '>
      <ChatHeader/>
      <div className='w-lg pb-10 '>
        <MessageArea/>
        <MessageInput />
      </div>
    </div>
  )
}

export default ChatBot
