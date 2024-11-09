// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div>

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

    </div>
  );
};

export default Home;
