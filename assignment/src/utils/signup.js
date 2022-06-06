import addAccount from './addAccount'

export default function signup(details) {
  if ( details.username === '' || details.pass === '' || details.re_pass === '' || details.lname === '' || details.fname === '' || details.phone === '' || details.email === ''  ) { return 'Vui lòng nhập đầy đủ thông tin' }
  if (details.pass !== details.re_pass) { return 'Xác nhận mật khẩu không chính xác' }
  addAccount(details)
  document.getElementById('pop-up-container').style.display = 'block'
  return ''
}
