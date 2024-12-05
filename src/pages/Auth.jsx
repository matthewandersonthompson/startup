// src/pages/Auth.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

const Auth = ({ onAuthChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleAuth(endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('userName', data.userName);
        onAuthChange(data.userName, 'authenticated');
      } else {
        const error = await response.json();
        setErrorMessage(error.msg || 'An error occurred.');
      }
    } catch {
      setErrorMessage('An error occurred. Please try again.');
    }
  }

  return (
    <div>
      <main>
        <div className="modal-container">
          <div className="modal-header">
            <h1>Sign Up for Free</h1>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAuth('/api/auth/create');
            }}
          >
            <div className="modal-field">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div className="modal-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <button type="submit" className="modal-button">Get Started</button>
            <div className="modal-footer">
              <p>
                Already have an account? <Link to="#">Log in here</Link>
              </p>
            </div>
          </form>
        </div>

        <div className="modal-container">
          <div className="modal-header">
            <h1>Welcome Back!</h1>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAuth('/api/auth/login');
            }}
          >
            <div className="modal-field">
              <label htmlFor="login-email">Email Address</label>
              <input
                type="email"
                id="login-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div className="modal-field">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <button type="submit" className="modal-button">Log In</button>
            <div className="modal-footer">
              <p className="forgot">
                <Link to="#">Forgot Password?</Link>
              </p>
            </div>
          </form>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </main>
    </div>
  );
};

export default Auth;
