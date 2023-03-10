
import React, { useState } from 'react';
import "./App.css";
import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Navigation from "./components/Navigation";
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';
import Top from './components/Top';
import Bottom from './components/Bottom';
import test from './components/test';

//18강.useState(1); 설명후 한번 지움.
function App(){
 const[number, setNumber]=useState(1); 

  const addNumber=()=>{
    setNumber(number+1);
  }
    
   
  return(  
    <div className="container">
   
    <h1>최상단 화면</h1>
    <test/>
    <Top number={number}/>
    <Bottom addNumber={addNumber}/>
   
     </div>

  );
};
export default App;