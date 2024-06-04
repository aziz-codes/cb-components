"use client";
import React, { useRef } from "react";

const TextInputWithEmoji: React.FC = () => {
  const inputRef = useRef<HTMLDivElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLDivElement>) => {
    console.log(e.target.textContent);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-64">
        <div
          ref={inputRef}
          contentEditable
          className="w-full p-2 border border-gray-300 rounded-lg outline-none  " // Added text-left class
          onInput={handleInput}
        ></div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <span role="img" aria-label="Emoji" className="text-lg">
            😊
          </span>
        </div>
      </div>
    </div>
  );
};

export default TextInputWithEmoji;
