// /Users/matthew/Desktop/cs260/startupv3/src/pages/Auth.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/auth.css';

const Auth = ({ onAuthChange }) => {
  const [isSignUp, setIsSignUp] = useState(true); // State to toggle between sign up and login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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

        // Determine success message based on action
        if (endpoint === '/api/auth/create') {
          setSuccessMessage(`Account created successfully! Welcome, ${data.userName}.`);
        } else {
          setSuccessMessage(`Welcome back, ${data.userName}!`);
        }

        // Show success modal
        setShowModal(true);
        // Clear any previous error
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <main style={{ flex: '1' }}>
        {!showModal && (
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
                    <p className="forgot">
                      <Link to="#">Forgot Password?</Link>
                    </p>
                  </div>
                </form>
              </div>
            )}
          </>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </main>

      {/* Your footer can go here if you have one */}
      {/* <footer className="quiz-footer">Footer Content</footer> */}

      {showModal && (
        <div className="success-modal">
          <div className="success-content">
            <h2>{isSignUp ? 'Account Creation Success!' : 'Login Success!'}</h2>
            <p>{successMessage}</p>
            <button
              onClick={() => {
                window.location.href = 'https://startup.dmtraininggrounds.com/dashboard';
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
