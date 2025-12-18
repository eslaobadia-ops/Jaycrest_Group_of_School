import { useState } from "react";
import { loginUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    const res = await loginUser(form);
    localStorage.setItem("token", res.data.access_token);
    nav("/dashboard");
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Username" onChange={e=>setForm({...form,username:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/>
      <button>Login</button>
    </form>
  );
}

