import React from 'react';
import './header.css';
import {Button } from '../../components'
import vid from './video/video-2.mp4';
const Header = () => (
  <div className="header-container">
    <video controls autoPlay loop muted src={vid} type="video/mp4" />
    <h1> Welcome to home page</h1>
    <p>Place to improve your security.</p>
    <div className="header-btns">
      <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' >Get Started</Button>
    </div>
  </div>
);

export default Header;