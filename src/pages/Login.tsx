import "../App.css";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>
        <p>Hey, Enter your details to get sign in <br/> to your account</p>
        
        <form>
          <div className="form-group">
            <input 
              className="input-field" 
              type="email" 
              placeholder="Enter Email / Phone No" 
            />
          </div>
          
          <div className="form-group">
            <input 
              className="input-field" 
              type="password" 
              placeholder="Passcode" 
            />
          </div>

          <button type="submit" className="auth-button">
            Sign in
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? <span className="auth-link">Request Now</span>
        </div>
      </div>
    </div>
  );
}