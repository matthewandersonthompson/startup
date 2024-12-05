// src/pages/login/Authenticated.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';

export function Authenticated({ userName, onLogout }) {
  const navigate = useNavigate();

  return (
    <div className="authenticated-container">
      <div className="player-name">{userName}</div>
      <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
