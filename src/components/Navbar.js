import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <nav className="main_navbar">
            <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar