import React, { useState } from 'react';
import './Login.css';
import google_icon from '../../assets/google_icon.png'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempt:', { email, password, rememberMe });
  };

  const navigateToRegister = () => {
    window.location.href = '/register';
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="content-wrapper">
          <h1>Craft Lasting Structures with Premium Concrete</h1>
          <p>Join our community for exclusive deals on premium construction materials</p>
        </div>
      </div>
      
      <div className="right-panel">
        <div className="form-container">
          <h2>SOLIDTRACK</h2>
          
          <div className="login-form-wrapper">
            <h3>Login</h3>
            <p className="welcome-text">Welcome Back! Please enter your details.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndoe@gmail.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                />
              </div>
              
              <div className="form-options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label htmlFor="remember">Remember me for 30 days</label>
                </div>
                <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
              </div>
              
              <button type="submit" className="login-button">Log in</button>
              
              <div className="divider">
                <span>or</span>
              </div>
              
              <button type="button" className="google-button">
                <img src={google_icon} alt="Google" />
                Sign In With Google
              </button>
            </form>
            
            <div className="register-prompt">
              <p>Don't have an account? <a href="/register" onClick={(e) => {e.preventDefault(); navigateToRegister();}}>Sign up for free</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;