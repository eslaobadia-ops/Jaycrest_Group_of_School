import { useState } from "react";
import { registerUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await registerUser(form);
    nav("/");
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Full Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input placeholder="Username" onChange={e=>setForm({...form,username:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/>
      <button>Create Account</button>
    </form>
  );
}

