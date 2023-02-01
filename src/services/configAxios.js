import Axios from 'axios'

// read token from local storage
const token = localStorage.getItem('token')

export default Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  headers: {
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + token
  }
})