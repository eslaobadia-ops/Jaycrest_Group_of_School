
import { useState } from "react";
import { register } from "../services/auth";

export default function Register(){
  const [form, setForm] = useState({username:"", password:""});
  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Username" onChange={e=>setForm({...form, username:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e=>setForm({...form, password:e.target.value})}/>
      <button onClick={()=>register(form).then(()=>alert("Registered")).catch(()=>alert("Fail"))}>Register</button>
    </div>
  );
}
