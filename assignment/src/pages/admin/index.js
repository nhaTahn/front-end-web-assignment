/* eslint-disable arrow-body-style */
import React from 'react'
import Cookies from 'js-cookie'
import { decode } from 'string-encode-decode'
import { Navigate } from 'react-router-dom'
import MainContent from './main-content/index'

export default function AdminPage() {
  if (String(decode(Cookies.get('role') !== 'admin'))) return <Navigate to="/home" />
  return (
    <div>
      <MainContent />
    </div>
  )
}
