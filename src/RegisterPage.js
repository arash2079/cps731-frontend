import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css'

const RegisterPage = () => {
  const [isTutor, setIsTutor] = useState(false);

  const handleToggle = () => {
    setIsTutor(!isTutor);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register to Tutor Connect</h2>
        <form>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          
          <div className="toggle-container">
            <label className="toggle-label">I register as a tutor</label>
            <div className="toggle-switch" onClick={handleToggle}>
              <input type="checkbox" checked={isTutor} readOnly />
              <span className="slider"></span>
            </div>
          </div>

          <button type="submit" className="register-button">Register</button>
        </form>
        <div className="link-to-login">
            <p><Link to="/login" className="link">I already have an account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
