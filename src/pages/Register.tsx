import "../App.css";
import { Link } from "react-router-dom";


export default function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p>Join us and start uploading images</p>
        
        <form>
          <div className="form-group">
            <input className="input-field" type="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input className="input-field" type="password" placeholder="Create Password" />
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