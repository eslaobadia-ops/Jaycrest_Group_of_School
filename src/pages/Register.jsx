
import { useState } from "react";
import { register } from "../services/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await register(form);
      alert("Registration successful");
      navigate("/");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input placeholder="Username" onChange={e=>setForm({...form, username:e.target.value})} />
      <input type="password" placeholder="Password" onChange={e=>setForm({...form, password:e.target.value})} />
      <button onClick={submit}>Register</button>
      <div className="link">
        <Link to="/">Back to login</Link>
      </div>
    </div>
  );
}
