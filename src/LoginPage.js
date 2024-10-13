import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; 

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Tutor Connect</h2>
        <form>
          <input type="email" placeholder="Email" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button className="login-btn">Sign In</button>
        </form>
        <div className="login-links">
          <p><Link to="/register" className="link">Register for a new account</Link></p>
          <p><Link to="/" className="link">Forgot Password</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


