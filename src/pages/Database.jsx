// /Users/matthew/Desktop/cs260/startupv3/src/pages/Database.jsx
import React, { useEffect, useState } from 'react';
import '../styles/database.css';

const Database = () => {
  const [users, setUsers] = useState([]);
  const [quizResults, setQuizResults] = useState([]);
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
  }, []);

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

          {/* Dungeon Master Chat Sessions now moved to the middle */}
          <h3>Dungeon Master Chat Sessions</h3>
          <table>
            <thead>
              <tr>
                <th>Session</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Still mock data for now */}
              <tr><td>Session 1</td><td>10/15/2024</td><td>Completed</td></tr>
              <tr><td>Session 2</td><td>10/16/2024</td><td>In Progress</td></tr>
              <tr><td>Session 3</td><td>10/17/2024</td><td>Completed</td></tr>
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
