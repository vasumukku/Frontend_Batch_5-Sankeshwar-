import React from 'react'
import { useState } from 'react'
import './App.css'
const App = () => {
  const[value,setValue]=useState(0);
  const start=()=>{
    setInterval(() => {
     setValue((value)=>value+1)
        
    }, 1000);
  }
  return (
    <div>
      <div className='main-box'>
        <h1>{value}</h1>
        <button onClick={start}>Start</button>
      </div>
    </div>
  )
}

export default App
