/* eslint-disable no-console */
import Cookies from 'js-cookie'

export default function logout() {
  Cookies.remove('username')
  Cookies.remove('password')
  Cookies.remove('accountID')
  Cookies.remove('firstName')
  Cookies.remove('lastName')
  Cookies.remove('phoneNumber')
  Cookies.remove('email')
  Cookies.remove('role')
}
