import Cookies from 'js-cookie'
import React from 'react'
import { Navigate } from 'react-router-dom'
import Form from '../login-form/form'

export default function Main() {
  if (Cookies.get('accountID')) {
    return <Navigate to="/home" />
  }
  return (
    <div>
      <Form />
    </div>
  )
}
