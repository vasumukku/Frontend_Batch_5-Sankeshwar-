import React from 'react'
import "./navbar.css";
const Navbar = () => {
  return (
    <div>

      <div className='navbar-parent'>
        <div><h1>Navbar</h1> </div> 
        <div className='nav-options'>
          <p>About me </p>
          <p>contact me </p>
          <div style={{marginTop:"20px"}}>
            <button className='login'>login</button>
          <button className='sigin'>sign up</button>
            </div> 
        </div>
      </div>

    </div>
  )
}

export default Navbar
