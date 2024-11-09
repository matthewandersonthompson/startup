// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/app-data.css';

const Dashboard = () => {
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

      <div className="content">
        <section className="learning-path">
          <h2>DM Training Course</h2>

          <div className="lesson">
            <img src="../assets/images/lesson1.png" alt="Lesson 1 Icon" />
            <Link to="/quizzes">1. Introduction to Being a Dungeon Master</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src="../assets/images/lesson2.png" alt="Lesson 2 Icon" />
            <Link to="/quizzes">2. Building a World: Story and Setting</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src="../assets/images/lesson3.png" alt="Lesson 3 Icon" />
            <Link to="/quizzes">3. Designing Adventures</Link>
          </div>
          <div className="line-between"></div>

          <div className="quiz-modal">
            <img src="../assets/images/test.png" alt="Quiz Icon" />
            <Link to="/quizzes">Quiz 1: DM Basics</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src="../assets/images/lesson4.png" alt="Lesson 4 Icon" />
            <Link to="/quizzes">4. Managing NPCs and Villains</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src="../assets/images/lesson5.png" alt="Lesson 5 Icon" />
            <Link to="/quizzes">5. Rules and Mechanics: Understanding D&D Core</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src="../assets/images/lesson6.png" alt="Lesson 6 Icon" />
            <Link to="/quizzes">6. Combat Strategies and Encounters</Link>
          </div>
          <div className="line-between"></div>

          <div className="quiz-modal">
            <img src="../assets/images/test.png" alt="Quiz Icon" />
            <Link to="/quizzes">Quiz 2: Storytelling and Combat</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src="../assets/images/lesson7.png" alt="Lesson 7 Icon" />
            <Link to="/quizzes">7. Role-Playing: Encouraging Player Engagement</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src="../assets/images/lesson8.png" alt="Lesson 8 Icon" />
            <Link to="/quizzes">8. Handling Unexpected Player Actions</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src="../assets/images/lesson9.png" alt="Lesson 9 Icon" />
            <Link to="/quizzes">9. Running Epic Boss Fights</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src="../assets/images/lesson10.png" alt="Lesson 10 Icon" />
            <Link to="/quizzes">10. Campaign Management and Pacing</Link>
          </div>
          <div className="line-between"></div>

          <div className="quiz-modal final-exam">
            <img src="../assets/images/test.png" alt="Final Exam Icon" />
            <Link to="/quizzes">Final Learning Exam: Professional Dungeon Master</Link>
          </div>
        </section>

        <aside className="sidebar">
          <h3>Your Progress</h3>
          <img src="../assets/images/progress_icon.png" alt="Progress Icon" className="centered-image" />
          <ul>
            <li>Completed Quizzes: 5</li>
            <li>Chatbot Sessions Completed: 3</li>
            <li>Last Score: 85%</li>
          </ul>

          <div className="ready-test">
            <p>Ready to test your DM skills?</p>
            <Link to="/chatbot" className="start-btn">DM Practice Bot</Link>
          </div>
        </aside>
      </div>

      <footer className="quiz-footer">
        <p>&copy; 2024 WorldSmith LLC</p>
        <a href="https://github.com/matthewandersonthompson/startup">GitHub Repository</a>
      </footer>
    </div>
  );
};

export default Dashboard;
