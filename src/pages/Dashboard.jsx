import React, { useEffect, useState } from 'react';
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
} from '../assets/images';

const Dashboard = () => {
  const [completedQuizzes, setCompletedQuizzes] = useState(0);
  const [chatSessionsCount, setChatSessionsCount] = useState(0);
  const [avgScore, setAvgScore] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  const totalQuizzes = 11;

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (!userName) {
      setErrorMsg('You must be logged in to view the dashboard.');
      return;
    }

    const quizResultsPromise = fetch('/api/database/myQuizResults', {
      headers: { 'X-User-Email': userName },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch quiz results: ${res.statusText}`);
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          const uniqueQuizzes = new Set(data.map(r => r.quizId));
          setCompletedQuizzes(uniqueQuizzes.size);
        } else {
          setCompletedQuizzes(0);
        }
      })
      .catch(err => {
        console.error('Error fetching quiz results:', err);
        setErrorMsg('Error fetching quiz results.');
        setCompletedQuizzes(0);
      });

    const chatSessionsPromise = fetch('/api/database/myChatSessions', {
      headers: { 'X-User-Email': userName },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch chat sessions: ${res.statusText}`);
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setChatSessionsCount(data.length);
        } else {
          setChatSessionsCount(0);
        }
      })
      .catch(err => {
        console.error('Error fetching chat sessions:', err);
        setErrorMsg('Error fetching chat sessions.');
        setChatSessionsCount(0);
      });

    const usersPromise = fetch('/api/database/users', {
      headers: { 'X-User-Email': userName },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch users: ${res.statusText}`);
        }
        return res.json();
      })
      .then(users => {
        if (Array.isArray(users)) {
          const currentUser = users.find(u => u.email === userName);
          if (currentUser && currentUser.avgScore !== undefined) {
            setAvgScore(currentUser.avgScore);
          } else {
            setAvgScore(0);
          }
        } else {
          setAvgScore(0);
        }
      })
      .catch(err => {
        console.error('Error fetching users:', err);
        setErrorMsg('Error fetching users.');
        setAvgScore(0);
      });

    Promise.all([quizResultsPromise, chatSessionsPromise, usersPromise]).catch(err =>
      console.error('Error loading dashboard data:', err)
    );
  }, []);

  const completionPercentage = Math.round((completedQuizzes / totalQuizzes) * 100);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (completionPercentage / 100) * circumference;

  function formatDuration(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diffMs = end - start;
    const diffMinutes = Math.floor(diffMs / 60000);
    const diffSeconds = Math.floor((diffMs % 60000) / 1000);

    if (diffMinutes > 0) {
      return `${diffMinutes}m ${diffSeconds}s`;
    } else {
      return `${diffSeconds}s`;
    }
  }

  return (
    <div>
      {errorMsg && <p className="error-message">{errorMsg}</p>}
      <div className="content">
        <section className="learning-path">
          <h2>DM Training Course</h2>

          <div className="lesson">
            <img src={lesson1} alt="Lesson 1 Icon" />
            <Link to="/quizzes/1">1. Combat Mechanics</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson2} alt="Lesson 2 Icon" />
            <Link to="/quizzes/2">2. What Saving Throw Should They Roll?</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson3} alt="Lesson 3 Icon" />
            <Link to="/quizzes/3">3. What Skill Check Should They Roll?</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson4} alt="Lesson 4 Icon" />
            <Link to="/quizzes/4">4. How to Level Up a Character</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson5} alt="Lesson 5 Icon" />
            <Link to="/quizzes/5">5. D&D's Most Common Spells and Their Rules</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson6} alt="Lesson 6 Icon" />
            <Link to="/quizzes/6">6. Forgotten Realms Lore</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson7} alt="Lesson 7 Icon" />
            <Link to="/quizzes/7">7. Multi-Classing Rules</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson8} alt="Lesson 8 Icon" />
            <Link to="/quizzes/8">8. How to Balance Encounters</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson9} alt="Lesson 9 Icon" />
            <Link to="/quizzes/9">9. Magic Items, Loot, and Shop Rules</Link>
          </div>
          <div className="line-between"></div>

          <div className="lesson">
            <img src={lesson10} alt="Lesson 10 Icon" />
            <Link to="/quizzes/10">10. Travel and Exploration</Link>
          </div>
          <div className="line-between"></div>

          <div className="quiz-modal final-exam">
            <img src={test} alt="Final Exam Icon" />
            <Link to="/quizzes/11">Final Learning Exam: Professional Dungeon Master</Link>
          </div>
        </section>

        <aside className="sidebar">
          <h3>Your Progress</h3>
          <div className="circular-progress-container" style={{textAlign: 'center'}}>
            <svg
              className="circular-chart"
              width="100"
              height="100"
              style={{ display: 'block', margin: '0 auto' }}
            >
              <circle
                className="chart-bg"
                stroke="#eee"
                strokeWidth="10"
                fill="transparent"
                r={radius}
                cx="50"
                cy="50"
              />
              <circle
                className="chart-fg"
                stroke="#6a1b9a"
                strokeWidth="10"
                strokeLinecap="round"
                fill="transparent"
                r={radius}
                cx="50"
                cy="50"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: offset,
                  transform: 'rotate(-90deg)',
                  transformOrigin: '50% 50%'
                }}
              />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="16"
                fill="#333"
              >
                {completionPercentage}%
              </text>
            </svg>
          </div>

          <ul>
            <li>Completed Quizzes: {completedQuizzes}</li>
            <li>Chatbot Sessions Completed: {chatSessionsCount}</li>
            <li>Average Score: {avgScore}%</li>
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
