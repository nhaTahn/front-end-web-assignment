import React, { useState } from 'react'
import './form.css'
import { Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import login from '../../../utils/login'

export default function Form() {
  const [details, setDetails] = useState({
    username: '', password: ''
  })
  const [error, setError] = useState()

  const checkError = () => {
    if (Cookies.get('accountID')) setError('false')
    else setError('Thông tin đăng nhập không chính xác!')
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    login(details, checkError)
  }

  const handleFocus = () => {
    setError('')
  }

  if (error === 'false') {
    return <Navigate to="/" />
  }
  return (
    <div id="Form">
      <div id="FormHeader">Đăng nhập</div>
      <form onSubmit={handleSubmit}>
        <div className="textContainer">
          <input
            type="username"
            required
            placeholder="Tên đăng nhập"
            onChange={(event) => {
              setDetails({ ...details, username: event.target.value })
            }}
            onFocus={handleFocus}
          />
        </div>
        <div className="textContainer">
          <input
            type="password"
            required
            placeholder="Mật khẩu"
            onChange={(event) => setDetails({ ...details, password: event.target.value })}
            onFocus={handleFocus}
          />
        </div>
        <div id="LoginButton">
          <input type="submit" value="Đăng nhập" />
        </div>
        <div id="login-error">{error}</div>
        <div id="SignUp">
          <div>Chưa có tài khoản? </div>
         
          <div><a href="/sign_up">Đăng ký</a></div>
        </div>
      </form>
    </div>
  )
}
