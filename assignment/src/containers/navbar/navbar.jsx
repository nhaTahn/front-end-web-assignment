import React, { useState } from 'react';
import {Link} from "react-router-dom"
import logo from "../../logo.svg"
import './navbar.css';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="product">Product</Link>
      </div>
      <div  className="navbar-sign">
        <p><Link to="/login">Sign in</Link></p>
        <button type="button"><Link to="/sign_up">Sign up</Link></button>
      </div>
      
    </div>
    
  );
};

