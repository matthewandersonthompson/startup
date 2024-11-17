// src/pages/Chatbot.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../styles/chatbot.css';
import { dm } from '../assets/images';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [scene, setScene] = useState('');
  const [dmPrompt, setDmPrompt] = useState('');
  const [adventureStarted, setAdventureStarted] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  // Reference to the chat history container
  const chatHistoryRef = useRef(null);

  // Auto-scroll to the bottom whenever chatHistory updates
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Function to handle starting the adventure
  const handleStartAdventure = async () => {
    if (!scene && !dmPrompt.trim()) {
      alert('Please select a scene or enter a DM prompt to start the adventure.');
      return;
    }

    try {
      const res = await fetch('/api/chatbot/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ scene, dmPrompt }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const botResponse = data.reply || 'No reply received';

      // Start the adventure by adding the bot's initial message
      setChatHistory([{ sender: 'bot', text: botResponse }]);
      setAdventureStarted(true);
      setSessionId(data.sessionId); // Store sessionId
    } catch (error) {
      console.error('Error starting adventure:', error);
      alert('Error starting the adventure. Please try again.');
    }
  };

  // Function to handle sending messages
  const handleSendMessage = async () => {
    if (!message.trim()) return;

    // Add user's message to chat history
    setChatHistory((prevChat) => [...prevChat, { sender: 'user', text: message }]);

    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, sessionId }), // Include sessionId
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const botResponse = data.reply || 'No reply received';

      // Add bot's response to chat history
      setChatHistory((prevChat) => [...prevChat, { sender: 'bot', text: botResponse }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setChatHistory((prevChat) => [
        ...prevChat,
        { sender: 'bot', text: 'Error connecting to the chatbot.' },
      ]);
    }

    // Clear the message input
    setMessage('');
  };

  return (
    <div>
      <div className="content">
        <aside>
          <h2>Select a Scene to Practice</h2>
          <label htmlFor="scene">Choose a scene:</label>
          <select
            id="scene"
            name="scene"
            value={scene}
            onChange={(e) => setScene(e.target.value)}
          >
            <option value="" disabled>
              Select a scene
            </option>
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
            value={dmPrompt}
            onChange={(e) => setDmPrompt(e.target.value)}
          ></textarea>

          <button className="start-btn" onClick={handleStartAdventure}>
            Let's Adventure!
          </button>
        </aside>

        <section className="chatbot-section">
          {!adventureStarted ? (
            <>
              <div className="image-wrapper">
                <img src={dm} alt="DM Image" />
              </div>
              <div className="scene-title">
                <h2>Let's Set the Scene...</h2>
              </div>
            </>
          ) : (
            <div className="chat-history" ref={chatHistoryRef}>
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`chat-message ${
                    chat.sender === 'user' ? 'user-message' : 'bot-message'
                  }`}
                >
                  <p>{chat.text}</p>
                </div>
              ))}
            </div>
          )}

          {adventureStarted && (
            <div className="chat-input">
              <input
                type="text"
                placeholder="Enter your message..."
                id="chatMessage"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Chatbot;
