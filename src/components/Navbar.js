import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <nav className="main_navbar">
          <h1>Techfornerd</h1>
            <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
            <div className="nav_right">
              <button id="subscribe_button">Subscribe</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar