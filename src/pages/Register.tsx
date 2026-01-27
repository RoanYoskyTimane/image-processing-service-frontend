import "../App.css";

export default function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Create Account</h1>
        
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
          Already have an account? <span className="auth-link">Sign in</span>
        </div>
      </div>
    </div>
  );
}