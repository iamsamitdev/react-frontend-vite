import Axios from 'axios'

// login user
const authLogin = (data) => {
  return Axios.post('auth/local', data , {
    baseURL: import.meta.env.VITE_BASE_URL_API,
    headers: {
      'Content-type': 'application/json'
    }
  })
}

// register user
const authRegister = (data) => {
  return Axios.post('auth/local/register', data , {
    baseURL: import.meta.env.VITE_BASE_URL_API,
    headers: {
      'Content-type': 'application/json'
    }
  })
}

export default { authLogin, authRegister }