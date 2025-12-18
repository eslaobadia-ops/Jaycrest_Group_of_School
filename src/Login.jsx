
import { useState } from 'react'
import { api } from './api'
import { useNavigate, Link } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const nav=useNavigate()

  const submit=async e=>{
    e.preventDefault()
    try{
      const r=await api.post('/api/auth/login',{email,password})
      localStorage.setItem('token',r.data.access_token)
      nav('/dashboard')
    }catch{
      setError('Login failed')
    }
  }

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} /><br/>
      <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} /><br/>
      <button>Login</button>
      {error && <p>{error}</p>}
      <p><Link to="/register">Register</Link></p>
    </form>
  )
}
