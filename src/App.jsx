// /Users/matthew/Desktop/cs260/startupv3/src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Auth from './pages/Auth.jsx';
import Database from './pages/Database.jsx';
import Chatbot from './pages/Chatbot.jsx';
import Quizzes from './pages/Quizzes.jsx'; 
import RequireAuth from './components/RequireAuth.jsx';
import './App.css';

function App() {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [authStatus, setAuthStatus] = useState(userName ? 'authenticated' : 'unauthenticated');

  function onAuthChange(newUserName, status) {
    setUserName(newUserName);
    setAuthStatus(status);
  }

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
      setAuthStatus('authenticated');
    }
  }, []);

  return (
    <Router>
      <div>
        <header className="quiz-header">
          <h1 className="fantasy-header">DM Training Grounds</h1>
          <nav>
            <ul className="tech-menu">
              <li><Link to="/">Home</Link></li>
              {/* Protected routes require login */}
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/chatbot">Chatbot</Link></li>
              <li><Link to="/quizzes">Quizzes</Link></li>
              <li><Link to="/database">Database</Link></li>
              {/* Auth link shows userName if logged in, else "Login" */}
              <li><Link to="/auth">{authStatus === 'authenticated' ? userName : "Login"}</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth onAuthChange={onAuthChange} />} />
          
          {/* Protected Routes wrapped with RequireAuth */}
          <Route 
            path="/dashboard" 
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            } 
          />
          <Route 
            path="/chatbot" 
            element={
              <RequireAuth>
                <Chatbot />
              </RequireAuth>
            } 
          />
          <Route 
            path="/database" 
            element={
              <RequireAuth>
                <Database />
              </RequireAuth>
            } 
          />

          {/* Quizzes routes */}
          <Route 
            path="/quizzes" 
            element={
              <RequireAuth>
                <Quizzes />
              </RequireAuth>
            } 
          />
          <Route 
            path="/quizzes/:id" 
            element={
              <RequireAuth>
                <Quizzes />
              </RequireAuth>
            }
          />
        </Routes>

        <footer className="quiz-footer">
          <p>&copy; 2024 WorldSmith LLC</p>
          <a href="https://github.com/matthewandersonthompson/startup">GitHub Repository</a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
