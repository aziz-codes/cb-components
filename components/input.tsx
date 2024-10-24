"use client";
import React, { useState, useRef, useEffect } from "react";

const TextInputWithEmoji = () => {
  const [input, setInput] = useState(""); // State to hold the textarea input
  const inputRef = useRef<HTMLTextAreaElement>(null); // Ref for the textarea

  // Adjust height dynamically based on scrollHeight
  const adjustHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = "34px"; // Reset the height
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`; // Set height based on content
    }
  };

  // Call adjustHeight whenever input changes
  useEffect(() => {
    adjustHeight(); // Adjust height on initial load and whenever input changes
  }, [input]);

  return (
    <div className="flex justify-between border px-2 items-center w-full max-w-md">
      <textarea
        placeholder="Enter a comment"
        ref={inputRef}
        className="resize-none overflow-hidden w-full p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Set input state on change
        style={{ height: "34px" }} // Initial height
      ></textarea>
      <span role="img" aria-label="Emoji" className="text-lg ml-2">
        😊
      </span>
    </div>
  );
};

export default TextInputWithEmoji;
// useless input