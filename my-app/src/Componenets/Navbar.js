import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav class="nav">
      <i class="uil uil-bars navOpenBtn"></i>
      <a href="#" class="logo">Algorithm Visualizer</a>
      <ul class="nav-links">
        <i class="uil uil-times navCloseBtn"></i>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/Contactus">Contact Us</Link></li>
      </ul>
      <i class="uil uil-search search-icon" id="searchIcon"></i>
      <div class="search-box">
        <i class="uil uil-search search-icon"></i>
        <input type="text" placeholder="Search here..." />
      </div>
    </nav>
    </div>
  )
}

export default Navbar