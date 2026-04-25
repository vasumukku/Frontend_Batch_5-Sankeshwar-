import React from 'react'
import Navbar from "./components/Navbar"
import Body from "./components/Body";
import Footer from "./components/Footer"
import './App.css';
const App = () => {
  return (
    <div>
      <Navbar /> 
      <div className='body-cards'>
        <Body />
       <Body />
        <Body />
         <Body />
      </div>

      <Footer />
    </div>
  )
}

export default App
