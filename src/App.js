import Useref from './Components/useRef';
import './App.css';
import Questions from "./Components/TheoryQuestions";
// import LifeCycleMethods from './Components/lifecycle';
import React from 'react';
import Lifecycle1 from './lifecycle1';
import UseMemo from './Components/useMemo';



export const App = () => {
  return (
    <div>
       <>
    <center>
    <Useref/>
     <Questions/>
     <UseMemo/>
     <Lifecycle1/>
     
    </center>
     </>
    </div>
  )
}


export default App;