import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 5000
})

export default api