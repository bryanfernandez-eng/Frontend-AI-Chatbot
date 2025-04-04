import React, { useState, useRef, useEffect } from "react";

function MessageInput() {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);
  const maxCharacters = 500;

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";

      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [message]);

  const handleChange = (e) => {
    const input = e.target.value;
    if (input.length <= maxCharacters) {
      setMessage(input);
    } else {
      setMessage(input.slice(0, maxCharacters));
    }
  };

  const handleSubmit = () => {
    if (message.trim() && message.length <= maxCharacters) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const remainingChars = maxCharacters - message.length;
  const isAtLimit = remainingChars <= 0;

  return (
    <div className="flex flex-col gap-2 p-3 sm:p-5 border border-gray-950 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 w-full max-w-4xl mx-auto">
      <textarea
        ref={textareaRef}
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={`w-full p-2 border-0 focus:outline-none appearance-none rounded resize-none overflow-y-auto no-scrollbar 
        }`}
        placeholder="Type your message..."
        style={{
          maxHeight: "150px",
          minHeight: "40px",
          scrollbarWidth: "none", 
          msOverflowStyle: "none" ,
        }}
      />
      <div className="flex justify-between items-center flex-wrap gap-2">
        <button
          className="border py-1 px-2 text-sm rounded-lg cursor-pointer bg-gradient-to-r from-blue-200 to-blue-300 
                          transition-transform duration-200 hover:translate-x-1 hover:bg-blue-100"
        >
          + Add Attachment
        </button>
        <button
          onClick={handleSubmit}
          disabled={isAtLimit || message.trim().length === 0}
          className={`border py-1 px-4 text-sm rounded-lg cursor-pointer
                    transition-transform duration-200 hover:-translate-x-1  bg-gradient-to-r  from-blue-200 to-blue-300 text-black font-medium
                    ${
                      isAtLimit || message.trim().length === 0
                        && " cursor-not-allowed"
                        
        }`}
        >
          Send
        </button>
      </div>
      <p className={`${isAtLimit ? "text-red-800 font-bold" : ""}`}>
        {message.length}/{maxCharacters} characters
        {isAtLimit && " - Maximum limit reached"}
      </p>
    </div>
  );
}

export default MessageInput;
