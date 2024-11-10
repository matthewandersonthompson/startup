// src/pages/Chatbot.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/chatbot.css';
import { dm } from '../assets/images'; 

const Chatbot = () => {
  return (
    <div>
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
            <img src={dm} alt="DM Image" /> {/* Use imported dm image here */}
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
    </div>
  );
};

export default Chatbot;
