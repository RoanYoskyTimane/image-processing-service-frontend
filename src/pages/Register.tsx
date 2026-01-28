import "../App.css";
import { Link , Navigate} from "react-router-dom";
import { useState, type FormEvent } from "react";
import api from "../api/axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  
  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/register", { username, password });
      const {token, userDto} = response.data;

      localStorage.setItem("token", token);
      
    } catch (err: any) {
      setError("Registration failed. Try a different username.");
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p>Join us and start uploading images</p>
        
        {error && <p style={{ color: "#FA5C5C", fontWeight: "bold" }}>{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <input className="input-field" type="email" placeholder="Email Address" value={username}
              onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <input className="input-field" type="password" placeholder="Create Password" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit" className="auth-button">Register</button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link to="/login" className="auth-link">Sign in</Link>
        </div>
      </div>
    </div>
  );
}