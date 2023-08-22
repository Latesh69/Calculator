import './App.css';
import { useState } from 'react'; 
import React from 'react';
function App() {
  const[result,setResult]=useState('');

  const doClick=(e)=>{
    setResult(result.concat(e.target.name));
  }
  const handleClearClick=()=>{
    setResult("");
  }

  const handleBackspaceClick =()=>{
    setResult(result.slice(0,result.length -1));
  }

  const handleEqualClick=()=>{
    try{
     
      setResult(eval(result).toString());

    }
    catch(err){
      setResult(err)
      
    }
   
  }
  return (
   <>
  <div>
    <h1 className='hh'>Calculator</h1>
  </div>

  <div className='con'>

    <form>
          <input type='text' className='in' value={result}/>
    </form>
  
   
  <div className='btn'>
  <button onClick={handleClearClick} id='clear'>Clear</button>
   <button onClick={handleBackspaceClick} id='backspace'>C</button>
   <button name="/" onClick={doClick}>&divide;</button>
   <button name="7" onClick={doClick}>7</button>
   <button name="8" onClick={doClick}>8</button>
   <button name="9" onClick={doClick}>9</button>
   <button name="*" onClick={doClick}>&times;</button>
   <button name="4" onClick={doClick}>4</button>
   <button name="5" onClick={doClick}>5</button>
   <button name="6" onClick={doClick}>6</button>
   <button name="-" onClick={doClick}>&ndash;</button>
   <button name="1" onClick={doClick}>1</button>
   <button name="2" onClick={doClick}>2</button>
   <button name="3" onClick={doClick}>3</button>
   <button name="+" onClick={doClick}>+</button>
   <button name="0" onClick={doClick}>0</button>
   <button name="." onClick={doClick}>.</button>
   <button name="=" onClick={handleEqualClick} id='result'>=</button>
  </div>
  </div>
   </>
  );
}

export default App;
