
import axios from 'axios'
export const api = axios.create({ baseURL: 'https://jaycrest1.onrender.com' })
api.interceptors.request.use(c => {
  const t = localStorage.getItem('token')
  if (t) c.headers.Authorization = `Bearer ${t}`
  return c
})
