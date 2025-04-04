import React from "react";
import Logo from "../Logo";
function ChatHeader() {
  return (
    <div className="flex  justify-between items-center w-full py-3 px-7 ">
      <Logo size="md"></Logo>
      <div>
        <p className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded transition-colors duration-200">
          AI Video Summarizer 
        </p>
      </div>
    </div>
  );
}

export default ChatHeader;
