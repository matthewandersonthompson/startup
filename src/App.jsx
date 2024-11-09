// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Auth from './pages/Auth.jsx';
import Database from './pages/Database.jsx';
import Chatbot from './pages/Chatbot.jsx';
import Quizzes from './pages/Quizzes.jsx'; 
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header className="quiz-header">
          <h1 className="fantasy-header">DM Training Grounds</h1>
          <nav>
            <ul className="tech-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/chatbot">Chatbot</Link></li>
              <li><Link to="/quizzes">Quizzes</Link></li>
              <li><Link to="/database">Database</Link></li>
              <li><Link to="/auth">USERNAME/Login</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/database" element={<Database />} />
          <Route path="/quizzes" element={<Quizzes />} /> 
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
