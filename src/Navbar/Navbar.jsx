import React from 'react'

function Navbar() {
  return (
      <nav>
        <div className='logo' >
            <img src="brand_logo.png" alt="logo" />
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
