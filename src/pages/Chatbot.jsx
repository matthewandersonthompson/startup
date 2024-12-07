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
  "Your player is plotting something truly chaotic!",
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

  const ws = useRef(null); // WebSocket reference
  const chatHistoryRef = useRef(null); // Reference to the chat history container

  // Auto-scroll to the bottom whenever chatHistory updates
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Cycle through thinking messages
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

  // Initialize WebSocket connection
  useEffect(() => {
    if (adventureStarted) {
      ws.current = new WebSocket('wss://startup.dmtraininggrounds.com');

      ws.current.onopen = () => {
        console.log('WebSocket connected');
        if (sessionId) {
          ws.current.send(JSON.stringify({ type: 'start', sessionId }));
        }
      };

      ws.current.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.type === 'reply') {
          setIsThinking(false);
          setChatHistory((prevChat) => [
            ...prevChat,
            { sender: 'bot', text: data.message },
          ]);
        } else if (data.type === 'thinking') {
          setIsThinking(true);
        }
      };

      ws.current.onclose = () => console.log('WebSocket disconnected');
      ws.current.onerror = (error) => console.error('WebSocket error:', error);

      return () => {
        if (ws.current) ws.current.close();
      };
    }
  }, [adventureStarted, sessionId]);

  // Handle starting the adventure
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

      setChatHistory([{ sender: 'bot', text: botResponse }]);
      setAdventureStarted(true);
      setSessionId(data.sessionId);
    } catch (error) {
      console.error('Error starting adventure:', error);
      alert('Error starting the adventure. Please try again.');
    }
  };

  // Handle sending messages
  const handleSendMessage = () => {
    if (!message.trim()) return;

    setChatHistory((prevChat) => [...prevChat, { sender: 'user', text: message }]);
    setMessage('');

    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify({ type: 'message', message, sessionId }));
      setIsThinking(true);
    } else {
      console.error('WebSocket is not connected.');
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
