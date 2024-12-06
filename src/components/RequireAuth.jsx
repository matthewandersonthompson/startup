// /Users/matthew/Desktop/cs260/startupv3/src/components/RequireAuth.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (userName) {
      setIsAuthenticated(true);
    } else {
      setShowLoginModal(true);
    }
  }, []);

  const handleLoginRedirect = () => {
    navigate('/auth'); // Redirect to login page
  };

  if (showLoginModal && !isAuthenticated) {
    return (
      <div className="success-modal">
        <div className="success-content">
          <h2>You need to log in!</h2>
          <p>Access to this page requires you to be logged in.</p>
          <button onClick={handleLoginRedirect} className="modal-button">
            Log In
          </button>
        </div>
      </div>
    );
  }

  return isAuthenticated ? children : null;
};

export default RequireAuth;
