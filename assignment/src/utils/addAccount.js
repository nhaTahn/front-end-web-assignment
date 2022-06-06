const axios = require('axios').default

export default function addAccount(details) {
  axios({
    method: 'post',
    url: 'http://localhost:3000/account',
    data: JSON.stringify({
      username: String(details.username),
      password: String(details.pass),
      first_name: String(details.fname),
      last_name: String(details.lname),
      phone_number: String(details.phone),
      email: String(details.email),
      role: 'MEMBER'
    })
  })
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response)
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error)
    })
}
