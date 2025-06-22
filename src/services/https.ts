import axios from 'axios'

const apiUrl = 'https://restcountries.com'
const version = 'v3.1'

const http = axios.create({
  baseURL: `${apiUrl}/${version}`,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default http
