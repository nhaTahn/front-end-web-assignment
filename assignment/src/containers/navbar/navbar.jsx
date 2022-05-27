import React, { useState } from 'react';

import logo from '../../logo.svg';
import './navbar.css';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div href="/"  className="navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="navbar-links_container">
          <p><a href="/">Home</a></p>
          <p><a href="/product">Product</a></p>
          <p><a href="/about">About</a></p>
        </div>
      </div>
      <div  className="navbar-sign">
        <p><a href="/login">Sign in</a></p>
        <button type="button"><a href="sign_up">Sign up</a></button>
      </div>
      
    </div>
    
  );
};

