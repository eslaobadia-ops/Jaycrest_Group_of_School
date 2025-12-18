
import { useState } from 'react'
import { api } from './api'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const [f,setF]=useState({name:'',email:'',password:''})
  const nav=useNavigate()

  const submit=async e=>{
    e.preventDefault()
    await api.post('/api/auth/register',f)
    nav('/')
  }

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>
      <input placeholder="Full Name" onChange={e=>setF({...f,name:e.target.value})} /><br/>
      <input placeholder="Email" onChange={e=>setF({...f,email:e.target.value})} /><br/>
      <input placeholder="Password" type="password" onChange={e=>setF({...f,password:e.target.value})} /><br/>
      <button>Create Account</button>
    </form>
  )
}
