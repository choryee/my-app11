
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

//18강.useState(1); 설명후 한번 지움.
function App(){
//  const[number, setNumber]=useState(1); 

//   const addNumber=()=>{
//     setNumber(number+1);
//   }
    
   
  return(  
    <div className="container">
    {/*  
      <test/>
    <ListPage/>
    <Navigation/>
    <Routes>
      <Route path="/" exact={true}  element={<ListPage />}/>
      <Route path="/write" exact={true} element={<WritePage />}/>
    </Routes>
*/}

{/* 밑<Top에는 '상태'인 number를 넘겨주고,<Bottom에는 그것을 제어하는 함수addNumber
를 넘겨준것이다.하지만 이렇게 하면, 넘겨줄 함수를 계속 만들어야 하므로, store
를 만드는 것.  */}
    <h1>최상단 화면</h1>
    <Top/>
    <Bottom/>
   
     </div>

  );
};
export default App;