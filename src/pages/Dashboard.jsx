// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/app-data.css';
import {
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
  test,
  progressIcon,
} from '../assets/images';

const Dashboard = () => {
  return (
    <div>
      <div className="content">
        <section className="learning-path">
          <h2>DM Training Course</h2>

          <div className="lesson">
            <img src={lesson1} alt="Lesson 1 Icon" />
            <Link to="/quizzes">1. Introduction to Being a Dungeon Master</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson2} alt="Lesson 2 Icon" />
            <Link to="/quizzes">2. Building a World: Story and Setting</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson3} alt="Lesson 3 Icon" />
            <Link to="/quizzes">3. Designing Adventures</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson4} alt="Lesson 4 Icon" />
            <Link to="/quizzes">4. Managing NPCs and Villains</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson5} alt="Lesson 5 Icon" />
            <Link to="/quizzes">5. Rules and Mechanics: Understanding D&D Core</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson6} alt="Lesson 6 Icon" />
            <Link to="/quizzes">6. Combat Strategies and Encounters</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson7} alt="Lesson 7 Icon" />
            <Link to="/quizzes">7. Role-Playing: Encouraging Player Engagement</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson8} alt="Lesson 8 Icon" />
            <Link to="/quizzes">8. Handling Unexpected Player Actions</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson9} alt="Lesson 9 Icon" />
            <Link to="/quizzes">9. Running Epic Boss Fights</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson10} alt="Lesson 10 Icon" />
            <Link to="/quizzes">10. Campaign Management and Pacing</Link>
          </div>
          <div className="line-between"></div>

          <div className="quiz-modal final-exam">
            <img src={test} alt="Final Exam Icon" />
            <Link to="/quizzes">Final Learning Exam: Professional Dungeon Master</Link>
          </div>
        </section>

        <aside className="sidebar">
          <h3>Your Progress</h3>
          <img src={progressIcon} alt="Progress Icon" className="centered-image" />
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
    </div>
  );
};

export default Dashboard;
