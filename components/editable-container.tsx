"use client";
import React, { useState, useRef } from 'react';

const EditableContainer: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const divRef = useRef<HTMLDivElement>(null);

  // Handle input change
  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    setContent(e.currentTarget.textContent || '');
  };

  return (
    <div className='flex flex-col gap-4 w-full max-w-sm h-[400px] overflow-y-auto border'>
      {/* Editable div */}
      <div
        ref={divRef}
        contentEditable
        onInput={handleInput}
        className={`relative border border-gray-300 p-3 min-h-[50px] max-h-auto overflow-y-auto w-full rounded-lg focus:outline-none
          ${content === '' ? 'before:content-[attr(data-placeholder)] before:text-gray-400 before:absolute' : ''}`}
        data-placeholder="Type something..."
      >
        {/* Editable content */}
      </div>
      
      {/* Image placeholder */}
      <div className='border w-full bg-red-500 h-44 min-h-44'>
        image placeholder
      </div>
    </div>
  );
};

export default EditableContainer;
