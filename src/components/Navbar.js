import React from 'react';
import './Navbar.css';
import Home from './Home';
import {Link ,Routes ,Route} from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Blog from './Blog';


function Navbar() {
  return (
    <div className='navbar'>
        <nav className="main_navbar">
          <h1>Techfornerd</h1>
            <ul>
                <li> <Link className='nav_link' to="/">Home</Link> </li>
                <li> <Link className='nav_link' to="/blog">Blog</Link></li>
                <li> <Link className='nav_link' to="/contact">Contact</Link> </li>
                <li> <Link className='nav_link' to="/about">About</Link> </li>
            </ul> 
            <div className="nav_right">
              <button id="subscribe_button">Subscribe</button>
            </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
    </div>
  )
}

export default Navbar