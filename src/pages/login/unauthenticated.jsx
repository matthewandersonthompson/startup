// src/pages/login/Unauthenticated.jsx
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';
import './auth.css';

export function Unauthenticated({ onLogin }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [displayError, setDisplayError] = useState(null);

  async function handleLogin(endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({ email: userName, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        localStorage.setItem('userName', userName);
        onLogin(userName);
      } else {
        const body = await response.json();
        setDisplayError(`⚠ Error: ${body.msg}`);
      }
    } catch (err) {
      setDisplayError('⚠ Error: Something went wrong.');
    }
  }

  return (
    <>
      <div className="unauthenticated-container">
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">🔒</span>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          variant="primary"
          onClick={() => handleLogin('/api/auth/login')}
          disabled={!userName || !password}
        >
          Login
        </Button>
        <Button
          variant="secondary"
          onClick={() => handleLogin('/api/auth/create')}
          disabled={!userName || !password}
        >
          Create Account
        </Button>
      </div>
      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
