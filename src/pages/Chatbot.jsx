// src/pages/Chatbot.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/chatbot.css';

const Chatbot = () => {
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
        <aside>
          <h2>Select a Scene to Practice</h2>
          <label htmlFor="scene">Choose a scene:</label>
          <select id="scene" name="scene" required>
            <option value="" disabled selected>Select a scene</option>
            <option value="tavern">Tavern Encounter</option>
            <option value="dungeon">Dungeon Exploration</option>
            <option value="combat">Combat Scenario</option>
            <option value="puzzle">Puzzle Challenge</option>
            <option value="wilderness">Wilderness Survival</option>
            <option value="roleplay">Roleplaying Conversation</option>
          </select>

          <label htmlFor="dmPrompt">DM Prompt:</label>
          <textarea
            id="dmPrompt"
            name="dmPrompt"
            rows="3"
            placeholder="Describe your scene or interact with the players..."
          ></textarea>

          <button className="start-btn">Let's Adventure!</button>
        </aside>

        <section className="chatbot-section">
          <div className="image-wrapper">
            <img src="../assets/images/dm.png" alt="DM Image" />
          </div>
          <div className="scene-title">
            <h2>Let's Set the Scene...</h2>
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Enter your message..."
              id="chatMessage"
            />
            <button>Send</button>
          </div>
        </section>
      </div>

      <footer className="quiz-footer">
        <p>&copy; 2024 WorldSmith LLC</p>
        <a href="https://github.com/matthewandersonthompson/startup">GitHub Repository</a>
      </footer>
    </div>
  );
};

export default Chatbot;
