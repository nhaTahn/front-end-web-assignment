import React from 'react'
import './popup.css'
import {Link} from 'react-router-dom'
export default function Popup() {
  return (
    <div id="pop-up-container">
      <div id="pop-up-content">
        <h2>Đăng ký thành công</h2>
        <Link to="/sign_in" >Đăng nhập</Link>
      </div>
    </div>
  )
}
