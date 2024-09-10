import React, { useEffect, useState } from 'react';
import '../Q1/Q1.css'

function Q1() {

  const useDebounce = (text, delay) => {
    const [debounce, setDebounce] = useState(text);

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebounce(text);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }, [text, delay]);

    return debounce;
  };

  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 2000); // Debounce delay set to 2 seconds

  const handleInputChange = (e) => {
    const value = e.target.value;
    const lettersOnly = value.replace(/[^a-zA-Z]/g, '');
    setText(lettersOnly);
  };

  return (

    
    <div>
        <p>1. Make an input box that only takes in letters and displays the updated text after 2 seconds</p>
        
        <input
          type='text'
          value={text}
          onChange={handleInputChange}
          className='Q1-input'
          placeholder='Text'
        />

        <span>{debouncedText}</span>
    </div>

  );
}

export default Q1;
