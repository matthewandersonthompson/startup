// src/pages/login/Unauthenticated.jsx
import React, { useState } from 'react';
import './login.css';

export function Unauthenticated({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleLogin(endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        onLogin(data.userName);
      } else {
        const error = await response.json();
        setErrorMessage(error.message);
      }
    } catch {
      setErrorMessage('An error occurred. Please try again.');
    }
  }

  return (
    <div className="unauthenticated-container">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => handleLogin('/api/auth/login')}>Login</button>
      <button onClick={() => handleLogin('/api/auth/create')}>Sign Up</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
