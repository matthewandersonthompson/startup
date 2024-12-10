import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './auth.css';

export function Authenticated({ userName, onLogout }) {
  const navigate = useNavigate();

  return (
    <div className="authenticated-container">
      <div className="playerName">{userName}</div>
      <Button variant="primary" onClick={() => navigate('/dashboard')}>Dashboard</Button>
      <Button variant="secondary" onClick={onLogout}>Logout</Button>
    </div>
  );
}
