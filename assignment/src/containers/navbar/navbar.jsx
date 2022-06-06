import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import { Button } from "../../components"
import logo from "../../images/hcmut.png"
import './navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { Login } from "../../pages"

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  let menu;
  if(click){
    menu = <FaTimes/>
  } else {
    menu = <FaBars/>
  };

  window.addEventListener('resize', showButton);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo"><img src={logo} alt="logo"></img>
          BK Ảo Vãi </Link>
        <div className='menu-icon' onClick={handleClick}>
          {menu}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to="/" className='nav-links' onClick={closeMobileMenu}> Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="/product" className='nav-links' onClick={closeMobileMenu}> Products</Link>
          </li>
          <li className='nav-item'>
            <Link to="/contact" className='nav-links' onClick={closeMobileMenu}> Contact</Link>
          </li>
          
          <li>
            <Link to="/sign_in" element={<Login/>}  className='nav-links-mobile' onClick={closeMobileMenu}>Sign In</Link>
          </li>
        </ul>
        {button && <Button element={<Login/>}  buttonStyle='btn--outline'>Sign In</Button>}

      </div>
      
      
    </div>
    
  );
};

