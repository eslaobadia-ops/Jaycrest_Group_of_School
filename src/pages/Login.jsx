
import { useState } from "react";
import { login } from "../services/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await login(form);
      navigate("/dashboard");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input placeholder="Username" onChange={e=>setForm({...form, username:e.target.value})} />
      <input type="password" placeholder="Password" onChange={e=>setForm({...form, password:e.target.value})} />
      <button onClick={submit}>Login</button>
      <div className="link">
        <Link to="/register">Create account</Link>
      </div>
    </div>
  );
}
