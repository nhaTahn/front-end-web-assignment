import React, { useState } from 'react'
import './signupform.css'
import submit from '../../../utils/signup'

export default function Signupform() {
  const [details, setDetails] = useState({
    username: '', pass: '', re_pass: '', phone: '', email: '', fname: '', lname: ''
  })
  const [error, setError] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    setError(submit(details))
  }

  const handleFocus = () => {
    setError('')
  }

  return (
    <div id="signup_container">
      <h1 id="signup_title">Đăng ký</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          placeholder="Tên đăng nhập"
          name="username"
          value={details.username}
          onChange={(event) => setDetails({ ...details, username: event.target.value })}
          onFocus={handleFocus}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          name="pass"
          value={details.pass}
          onChange={(event) => setDetails({ ...details, pass: event.target.value })}
          onFocus={handleFocus}
        />
        <input
          type="password"
          placeholder="Xác nhận mật khẩu"
          name="repass"
          value={details.re_pass}
          onChange={(event) => setDetails({ ...details, re_pass: event.target.value })}
          onFocus={handleFocus}
        />
        <input 
          type="tel"
          placeholder="Số điện thoại"
          name="phone"
          value={details.phone}
          onChange={(event) => {
            setDetails({ ...details, phone: event.target.value })
          }}
          onFocus={handleFocus}
        />
        <input
          type="email"
          placeholder="Email"
          name="mail"
          value={details.email}
          onChange={(event) => setDetails({ ...details, email: event.target.value })}
          onFocus={handleFocus}
        />
        
        <input
          type="text"
          placeholder="Họ"
          name="name"
          value={details.lname}
          onChange={(event) => setDetails({ ...details, lname: event.target.value })}
          onFocus={handleFocus}
        />
        <input
          type="text"
          placeholder="Tên"
          name="name"
          value={details.fname}
          onChange={(event) => setDetails({ ...details, fname: event.target.value })}
          onFocus={handleFocus}
        />
        
        <input className="btn" id="sign-up-button" type="submit" value="Đăng ký" />
      </form>
      <div id="signup-error">{error}</div>
    </div>
  )
}
