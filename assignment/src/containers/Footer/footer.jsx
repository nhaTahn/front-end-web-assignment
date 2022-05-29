import React from 'react';
import logo from '../../images/hcmut.png';
import './footer.css';

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={logo} alt="logo" />
        <p> <br />Lập trình web</p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Privacy Policy</p>
      </div>
      <div className="footer-links_div">
        <h4>Liên lạc</h4> 
        <p>Lâm Nhật Tân</p>
        <p>08########</p>
        <p>tan.lamcs1001@hcmut.edu.vn</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2022 HCMUT CSE</p>
    </div>
  </div>
);

export default Footer;
