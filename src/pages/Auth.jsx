import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/auth.css';

const Auth = ({ onAuthChange }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showLoggedInModal, setShowLoggedInModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('userName');
    if (storedUser) {
      setShowLoggedInModal(true);
    }
  }, []);

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


        if (endpoint === '/api/auth/create') {
          setSuccessMessage(`Account created successfully! Welcome, ${data.userName}.`);
        } else {
          setSuccessMessage(`Welcome back, ${data.userName}!`);
        }

        setShowModal(true);
        setErrorMessage('');
        onAuthChange(data.userName, 'authenticated');
      } else {
        const error = await response.json();
        setErrorMessage(error.msg || 'An error occurred.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('userName');
    onAuthChange('', 'unauthenticated');
    setShowLoggedInModal(false);
    setEmail('');
    setPassword('');
    setIsSignUp(true);
    setErrorMessage('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <main style={{ flex: '1' }}>
        {showLoggedInModal && !showModal && (
          <div className="success-modal">
            <div className="success-content">
              <h2>You are already logged in!</h2>
              <p>You’re already logged in as <strong>{localStorage.getItem('userName')}</strong>.</p>
              <button
                onClick={handleLogout}
                className="modal-button"
                style={{ marginBottom: '10px' }}
              >
                Log Out
              </button>
              <button
                onClick={() => {
                  window.location.href = '/dashboard';
                }}
                className="modal-button"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        )}

        {!showLoggedInModal && !showModal && (
          <>
            {isSignUp ? (
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
                      Already have an account?{' '}
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsSignUp(false);
                          setEmail('');
                          setPassword('');
                          setErrorMessage('');
                        }}
                      >
                        Log in here
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            ) : (
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
                    <p>
                      Don't have an account?{' '}
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsSignUp(true);
                          setEmail('');
                          setPassword('');
                          setErrorMessage('');
                        }}
                      >
                        Sign up here
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            )}
          </>
        )}

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </main>

      {showModal && (
        <div className="success-modal">
          <div className="success-content">
            <h2>{isSignUp ? 'Account Creation Success!' : 'Login Success!'}</h2>
            <p>{successMessage}</p>
            <button
              onClick={() => {
                window.location.href = '/dashboard';
              }}
              className="modal-button"
            >
              Let’s Get Started!!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
