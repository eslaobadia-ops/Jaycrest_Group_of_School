
import { useState } from "react";
import { login } from "../services/auth";

export default function Login(){
  const [form, setForm] = useState({username:"", password:""});
  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={e=>setForm({...form, username:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e=>setForm({...form, password:e.target.value})}/>
      <button onClick={()=>login(form).then(()=>alert("OK")).catch(()=>alert("Fail"))}>Login</button>
    </div>
  );
}
