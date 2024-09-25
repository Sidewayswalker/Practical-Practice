import { useEffect, useState } from "react";
import '../Q5/Q5.css';

function Q5(){

    // input that takes in letters
    // button to check if Palindrome.
    // Create state for word
    // Create state for word backwards
    // Create state for message - if Statement

    const [textWord, setTextWord] = useState([]);
    const [reverseTextWord, setReverseTextWord] = useState([])
    const [message, setMessage] = useState([]);

    //! Handle text in input
    function handleTextChange(e) {
        let value = e.target.value;
        let wordsOnly = value.replace(/[^a-zA-Z]/g, '');
        setTextWord(wordsOnly);
        backwardsWord(wordsOnly);
    }
    //! Reverse state variable textWord
    function backwardsWord(word) {
        let reverseTextWord = word.split('').reverse().join('');
        setReverseTextWord(reverseTextWord);
        checkPalindrome(word, reverseTextWord);
    }


    function checkPalindrome(word, reverseTextWord) {
        if (word.length === 0)
            setMessage('⬆️ Please enter Information ⬆️')
        else if (word.toLowerCase() === reverseTextWord.toLowerCase())
            setMessage('YES! This is a Palindrome')
        else
            setMessage('NO! This is NOT a Palindrome')
    }


    useEffect(() => {
        checkPalindrome('','');
    }, []);


    return(
        <div>
            <div>
                <p>
                5. Type in a word and have the computer check 
                if it's a Palindrome.
                </p>
            </div>
            <div>
                <input
                onChange={handleTextChange}
                value={textWord}
                ></input>

                <div className="Q5-message">
                    {message}
                </div>
                


            </div>
        </div>
    )
}

export default Q5;