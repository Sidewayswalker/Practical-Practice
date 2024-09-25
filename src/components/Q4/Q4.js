import React, { useEffect, useState } from 'react';
import '../Q4/Q4.css';


function Q4() {

    const [numberA, setnumberA] = useState([]);
    const [numberB, setnumberB] = useState([]);
    const [result, setResult] = useState([]);


    const handleChangeA = (e) => {
        const value = e.target.value;
        const numbersOnly = value.replace(/[^0-9]/g, '');
        setnumberA(numbersOnly)
    };

    const handleChangeB = (e) => {
        const value = e.target.value;
        const numbersOnly = value.replace(/[^0-9]/g, '');
        setnumberB(numbersOnly)
    };

    function displayResult(){
        if (numberA == '' || numberB == '')
            setResult('Please be sure to fill out both inputs.') 
        else if(numberA > numberB)
            setResult('Number A is Bigger.');
        else if (numberA < numberB)
            setResult('Number B is Bigger.');
        else if (numberA === numberB)
            setResult('They are the Same.');
    }

    function clearInputs(){
        setnumberA('')
        setnumberB('')
        setResult('')
    }


    
    return(
        <div>
            <div>
                <p>4. Have the user input 2 different values A & B. 
                Then have the computer tell you which is bigger. 
                Create a seperate clear button.</p>
            </div>
            <div>
                <div>
                    <span className='Q4-text'> 
                        <p>Number A</p>
                        <p>Number B</p>
                    </span>
            
                    <input
                    value={numberA}
                    onChange={handleChangeA}
                    placeholder='Number "A"'
                    className='Q4-inputA'
                    ></input>
        
                    <input
                    value={numberB}
                    onChange={handleChangeB}
                    placeholder='Number "B"'
                    className='Q4-inputB'
                    ></input>

                    <button
                    className='Q4-check-button'
                    onClick={displayResult}
                    >Check</button> 

                    <button
                    className='Q4-clear-button'
                    onClick={clearInputs}
                    >Clear</button>

                        <div>
                            {result}
                        </div>        
                </div>
            </div>
        </div>

    )
}

export default Q4;