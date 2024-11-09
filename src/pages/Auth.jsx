// src/pages/Auth.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

const Auth = () => {
  return (
    <div>

      <main>
        <div className="modal-container">
          <div className="modal-header">
            <h1>Sign Up for Free</h1>
          </div>
          <form>
            <div className="modal-field">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required autoComplete="off" />
            </div>
            <div className="modal-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required autoComplete="off" />
            </div>
            <button type="submit" className="modal-button">Get Started</button>
            <div className="modal-footer">
              <p>Already have an account? <Link to="#">Log in here</Link></p>
            </div>
          </form>
        </div>

        <div className="modal-container">
          <div className="modal-header">
            <h1>Welcome Back!</h1>
          </div>
          <form>
            <div className="modal-field">
              <label htmlFor="login-email">Email Address</label>
              <input type="email" id="login-email" required autoComplete="off" />
            </div>
            <div className="modal-field">
              <label htmlFor="login-password">Password</label>
              <input type="password" id="login-password" required autoComplete="off" />
            </div>
            <button type="submit" className="modal-button">Log In</button>
            <div className="modal-footer">
              <p className="forgot"><Link to="#">Forgot Password?</Link></p>
            </div>
          </form>
        </div>
      </main>
      
    </div>
  );
};

export default Auth;
