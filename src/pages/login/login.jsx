// src/pages/login/Login.jsx
import React, { useState } from 'react';
import { AuthState } from './authState';
import { Authenticated } from './authenticated';
import { Unauthenticated } from './Unauthenticated';

export function Login() {
  const [authState, setAuthState] = useState(AuthState.Unknown);
  const [userName, setUserName] = useState('');

  const handleAuthChange = (userName, newAuthState) => {
    setUserName(userName);
    setAuthState(newAuthState);
  };

  return (
    <main className="container-fluid text-center">
      {authState !== AuthState.Unknown && <h1>Welcome to Your App</h1>}
      {authState === AuthState.Authenticated && (
        <Authenticated
          userName={userName}
          onLogout={() => handleAuthChange('', AuthState.Unauthenticated)}
        />
      )}
      {authState === AuthState.Unauthenticated && (
        <Unauthenticated
          onLogin={(loginUserName) => handleAuthChange(loginUserName, AuthState.Authenticated)}
        />
      )}
    </main>
  );
}
