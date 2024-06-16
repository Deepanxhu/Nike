import React from 'react';
import brand_logo from "../assets/brand_logo.png"

function Navbar() {
  return (
      <nav>
        <div className='logo' >
            <img src={brand_logo} alt="logo" />
        </div>

        <ul>
            <li href='#'>MENU</li>
            <li href='#'>LOCATION</li>
            <li href='#'>ABOUT</li>
            <li href='#'>CONTACT</li>
        </ul>
        <button>LOGIN</button>
      </nav>

  )
}

export default Navbar
