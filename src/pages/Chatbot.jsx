import React, { useState, useEffect, useRef } from 'react';
import '../styles/chatbot.css';
import { dm } from '../assets/images';

const thinkingMessages = [
  "Your player is thinking...",
  "Your player might have been stumped... oh wait!",
  "The dice are rolling in their mind...",
  "Your player is consulting the sacred rulebook...",
  "Your player just asked their patron for advice...",
  "A critical hit of indecision has occurred!",
  "Your player’s brain cast *Detect Thoughts* on itself.",
  "The bard is composing their response in rhyme...",
  "Your player failed their Wisdom save... thinking harder!",
  "Your player is plotting something truly chaotic!"
];

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [scene, setScene] = useState('');
  const [dmPrompt, setDmPrompt] = useState('');
  const [adventureStarted, setAdventureStarted] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [isThinking, setIsThinking] = useState(false);
  const [thinkingMessage, setThinkingMessage] = useState(thinkingMessages[0]);

  const ws = useRef(null);
  const chatHistoryRef = useRef(null);

  const wsURL =
    process.env.NODE_ENV === 'production'
      ? 'wss://startup.dmtraininggrounds.com/ws'
      : 'ws://localhost:5173/ws';

  // Auto-scroll to the bottom whenever chatHistory updates
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Cycle through thinking messages every 2 seconds while isThinking
  useEffect(() => {
    let interval;
    if (isThinking) {
      interval = setInterval(() => {
        setThinkingMessage((prev) => {
          const currentIndex = thinkingMessages.indexOf(prev);
          return thinkingMessages[(currentIndex + 1) % thinkingMessages.length];
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isThinking]);

  // Initialize WebSocket connection once the adventure has started
  useEffect(() => {
    if (adventureStarted) {
      ws.current = new WebSocket(wsURL);

      ws.current.onopen = () => {
        console.log('WebSocket connected!');
      };

      ws.current.onmessage = (event) => {
        console.log('Message from server:', event.data);
        try {
          const data = JSON.parse(event.data);

          // If we get a chat_reply from the server, stop thinking and show the message
          if (data.type === 'chat_reply') {
            setIsThinking(false);
            setChatHistory((prevChat) => [...prevChat, { sender: 'bot', text: data.message }]);
          }
        } catch (err) {
          console.error('Error parsing server message:', err);
        }
      };

      ws.current.onerror = (error) => {
        console.error('WebSocket Error:', error);
      };

      ws.current.onclose = () => {
        console.log('WebSocket closed.');
      };

      return () => {
        if (ws.current) {
          ws.current.close();
          console.log('WebSocket connection closed');
        }
      };
    }
  }, [adventureStarted]);

  // Handle starting the adventure by calling the API
  const handleStartAdventure = async () => {
    if (!scene && !dmPrompt.trim()) {
      alert('Please select a scene or enter a DM prompt to start the adventure.');
      return;
    }

    try {
      const res = await fetch('/api/chatbot/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scene, dmPrompt }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setChatHistory([{ sender: 'bot', text: data.reply || 'No reply received' }]);
      setAdventureStarted(true);
      setSessionId(data.sessionId);
    } catch (error) {
      console.error('Error starting adventure:', error);
      alert('Error starting the adventure. Please try again.');
    }
  };

  // Handle sending user messages by calling the chatbot API
  const handleSendMessage = async () => {
    if (!message.trim()) return;

    // Add user message to chat history
    setChatHistory((prevChat) => [...prevChat, { sender: 'user', text: message }]);
    const userMessage = message;
    setMessage('');

    // Show "thinking" message while waiting for the reply
    setIsThinking(true);

    // Call the chatbot API
    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, sessionId }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // We do NOT directly show the bot reply here
      // The reply will come via WebSocket 'chat_reply' event
      // setIsThinking(false) will be handled when we receive 'chat_reply'

    } catch (error) {
      console.error('Error sending message to chatbot:', error);
      alert('Error: ' + error.message);
      setIsThinking(false);
    }
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
            <option value="" disabled>Select a scene</option>
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
                  className={`chat-message ${chat.sender === 'user' ? 'user-message' : 'bot-message'}`}
                >
                  <p>{chat.text}</p>
                </div>
              ))}
              {isThinking && (
                <div className="chat-message bot-message">
                  <p>{thinkingMessage}</p>
                </div>
              )}
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
