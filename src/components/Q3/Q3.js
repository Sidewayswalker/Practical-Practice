import React, { useEffect, useState } from 'react';
import '../Q3/Q3.css';

// FizzBuzz Component

function Q3() {
    // State to store the FizzBuzz results
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Generate FizzBuzz results
        const fizzBuzzResults = [];
        for (let i = 1; i <= 15; i++) {
            if (i % 15 === 0) fizzBuzzResults.push("FizzBuzz");
            else if (i % 3 === 0) fizzBuzzResults.push("Fizz");
            else if (i % 5 === 0) fizzBuzzResults.push("Buzz");
            else fizzBuzzResults.push(i);
        }
        // Update state with the results
        setResults(fizzBuzzResults);
    }, []);

    return (
        <div>
            <p>3. Write a program that prints numbers 1 - 15, 
                but for multiples of 3, print "Fizz" and 
                for multiples of 5, print "Buzz."
            </p>
            <ul className='Q3-list'>
                {results.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
}

export default Q3;
