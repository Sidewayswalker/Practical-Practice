import { useState } from "react"
import '../Q6/Q6.css';



function Q6() {

    const [jsVotes, setJsVotes] = useState(0)
    const [pythonVotes, setPythonVotes] = useState(0);
    const [spanishVotes, setSpanishVotes] = useState(0);


    function toggleJsVote(){
        if (jsVotes === 0)
            setJsVotes(jsVotes + 1);
        else if (jsVotes !== 0)
            setJsVotes(jsVotes - 1); 
    }

    function togglePythonVote(){
        if (pythonVotes === 0)
            setPythonVotes(pythonVotes + 1);
        else if (pythonVotes !== 0)
            setPythonVotes(pythonVotes - 1); 
    }
    function toggleSpanishVote(){
        if (spanishVotes === 0)
            setSpanishVotes(spanishVotes + 1);
        else if (spanishVotes !== 0)
            setSpanishVotes(spanishVotes - 1); 
    }




    return(
        <div>
            <div>
                <p>6. Create a qustion with multiple check box anwsers.
                    Display the votes after the person has selected 
                    all of their favorites.
                </p>
            </div>

            <div>
                <p>What is your favorite Language?</p>
                <div>
                    <input
                    type="checkbox"
                    onChange={toggleJsVote}
                    ></input>
                    <label>JavaScript</label>
                </div>
                <div>
                    <input
                    type="checkbox"
                    onChange={togglePythonVote}
                    ></input>
                    <label>Python</label>
                </div>
                <div>
                    <input
                    type="checkbox"
                    onChange={toggleSpanishVote}
                    ></input>
                    <label>Spanish</label>
                </div>


                <p>JavaScript Votes: {jsVotes}</p>
                <p>Python Votes: {pythonVotes}</p>
                <p>Spanish Votes: {spanishVotes}</p>
                
            </div>
        </div>
    )
}

export default Q6
