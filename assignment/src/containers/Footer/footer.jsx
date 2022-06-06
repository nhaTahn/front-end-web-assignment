import React from 'react';
import logo from '../../images/hcmut.png';
import './footer.css';
import {Link} from 'react-router-dom';

const Footer = () => (
  <div className="footer section__padding">

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={logo} alt="logo" />
        <h2> BKaV Company</h2>
        
        <p>Địa chỉ: Tòa nhà HH1 - Khu đô thị Yên Hòa - Phường Yên Hòa - Cầu Giấy - Hà Nội</p>


      </div>
     
      <div className="footer-links">
        <div><Link to="/dieu-khoan">Điều khoản bảo mật</Link></div>
        <div><Link to="/dieu-khoan">Điều khoản sử dụng</Link> </div>
        <div><Link to="/contact">Liên hệ</Link></div>
      </div>
       
      
    </div>

    <div className="footer-copyright">
        <p>© 1995 - 2022 Bkav Corporation</p>
      
    </div>
  </div>
);

export default Footer;
