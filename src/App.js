import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

import Q1 from './components/Q1/Q1.js';
import Q2 from './components/Q2/Q2.js';
import Q3 from './components/Q3/Q3.js';
import Q4 from './components/Q4/Q4.js';
import Q5 from './components/Q5/Q5.js';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Let's Practice some Javascript/React Interview Questions!</p>
      </header>

      <div className="App-body"> {/* Replaced <body> with <div> */}

      <Q1 />
      <Q2 />
      <Q3 />
      <Q4 />
      <Q5 />

      </div>
    </div>
  );
}

export default App;
