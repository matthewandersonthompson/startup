// /Users/matthew/Desktop/cs260/startupv3/src/pages/Database.jsx
import React, { useEffect, useState } from 'react';
import '../styles/database.css';

const Database = () => {
  const [users, setUsers] = useState([]);
  const [quizResults, setQuizResults] = useState([]);
  const [chatSessions, setChatSessions] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (!userName) {
      setErrorMsg('You must be logged in to view this page.');
      return;
    }

    // Fetch users
    fetch('/api/database/users', {
      headers: {
        'X-User-Email': userName
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Failed to fetch users: ${res.statusText}`);
      }
      return res.json();
    })
    .then(data => {
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        setUsers([]);
      }
    })
    .catch(err => {
      console.error('Error fetching users:', err);
      setErrorMsg('Error fetching users.');
      setUsers([]);
    });

    // Fetch quiz results
    fetch('/api/database/myQuizResults', {
      headers: {
        'X-User-Email': userName
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Failed to fetch quiz results: ${res.statusText}`);
      }
      return res.json();
    })
    .then(data => {
      if (Array.isArray(data)) {
        setQuizResults(data);
      } else {
        setQuizResults([]);
      }
    })
    .catch(err => {
      console.error('Error fetching quiz results:', err);
      setErrorMsg('Error fetching quiz results.');
      setQuizResults([]);
    });

    // Fetch chat sessions
    fetch('/api/database/myChatSessions', {
      headers: {
        'X-User-Email': userName
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Failed to fetch chat sessions: ${res.statusText}`);
      }
      return res.json();
    })
    .then(data => {
      if (Array.isArray(data)) {
        setChatSessions(data);
      } else {
        setChatSessions([]);
      }
    })
    .catch(err => {
      console.error('Error fetching chat sessions:', err);
      setErrorMsg('Error fetching chat sessions.');
      setChatSessions([]);
    });
  }, []);

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

      <main>
        <section className="data-section">
          <h3>Quiz Results</h3>
          <table>
            <thead>
              <tr>
                <th>Quiz ID</th>
                <th>User Email</th>
                <th>Score (%)</th>
                <th>Date Taken</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(quizResults) && quizResults.length > 0 ? (
                quizResults.map((result, index) => (
                  <tr key={index}>
                    <td>{result.quizId}</td>
                    <td>{result.userEmail}</td>
                    <td>{result.score}%</td>
                    <td>{new Date(result.dateTaken).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No quiz results found.</td>
                </tr>
              )}
            </tbody>
          </table>

          <h3>Dungeon Master Chat Sessions</h3>
          <table>
            <thead>
              <tr>
                <th>Session ID</th>
                <th>Scene</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(chatSessions) && chatSessions.length > 0 ? (
                chatSessions.map((session, index) => (
                  <tr key={index}>
                    <td>{session.sessionId}</td>
                    <td>{session.scene}</td>
                    <td>{formatDuration(session.startTime, session.lastUpdate)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No chat sessions found.</td>
                </tr>
              )}
            </tbody>
          </table>

          <h3>User Login Information</h3>
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) && users.map((user, index) => (
                <tr key={index}>
                  <td>{user.email}</td>
                  <td><button>Hidden for User Security</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Database;
