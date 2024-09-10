import React, {useEffect, useState} from 'react';
import '../Q2/Q2.css'

function Q2 (){
    
    const [number, setNumber] = useState("");
    const [numberList, setNumberList] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value
        const numbersOnly = value.replace(/[^0-9]/g, '');
    setNumber(numbersOnly);
    }

    function handleSubmit(){
        if (number !== "") {
            setNumberList([...numberList, number]);
            setNumber("");
        }
    }

    const clearNumberList = () => {
        setNumberList([]);
    }

    return(
        <div>
            <p>2. Make an input and button that will submit numbers to a list that expands vertically</p>
            
            <input
            type="integer"
            value={number}
            onChange={handleChange}
            className='Q2-input'
            placeholder='Number'
            ></input>

            <button
            className='Q2-submit'
            onClick={handleSubmit}
            >Submit</button>

            <button 
            className='Q2-clear'
            onClick={clearNumberList}
            >❌</button>
        
            <ul className='Q2-list'>
                {numberList.map((num,index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>

    )
}

export default Q2