// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
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

      <main>
        <section className="intro-section">
          <div className="image-wrapper">
            <img src="../assets/images/dmskills.png" alt="Dungeon Master" />
          </div>
          <div className="headline">
            <h2>Are you a new Dungeon Master looking to grow your skills and know-how?</h2>
            <Link to="/auth" className="action-btn">Let's Adventure!</Link>
          </div>
        </section>

        <section className="links-section">
          <h3>Explore Our Site</h3>
          <div className="page-list">
            <div className="page-item">
              <a href="https://github.com/matthewandersonthompson/startup">Check Out My GitHub!</a>
              <p>Follow this link to my public GitHub repository! Clone my project, learn from my mistakes, or do anything you’d like!</p>
            </div>
            <div className="page-item">
              <Link to="/dashboard">Adventuring Dashboard</Link>
              <p>Your personal DM training center! Track your progress and revisit your quizzes and chatbot sessions.</p>
            </div>
            <div className="page-item">
              <Link to="/chatbot">Mystical Testing Grounds</Link>
              <p>Practice your DMing skills by chatting with our AI-powered DM practice bot.</p>
            </div>
            <div className="page-item">
              <Link to="/quizzes">Tome of Knowledge Tests</Link>
              <p>Test your knowledge with fun quizzes that will challenge even the most experienced Dungeon Masters!</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="quiz-footer">
        <p>&copy; 2024 WorldSmith LLC</p>
        <a href="https://github.com/matthewandersonthompson/startup">GitHub Repository</a>
      </footer>
    </div>
  );
};

export default Home;
