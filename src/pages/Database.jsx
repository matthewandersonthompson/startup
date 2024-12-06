// src/pages/Database.jsx
import React, { useEffect, useState } from 'react';
import '../styles/database.css';

const Database = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user login data from the server
    fetch('/api/database/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  return (
    <div>
      <div className="disclaimer-modal">
        <p>This Page Would NOT Be User Facing. Only Displayed for Assignment Purposes.</p>
      </div>

      <main>
        <section className="data-section">
          {/* Existing Game Session Logs Table */}
          <h3>Game Session Logs</h3>
          <table>
            <thead>
              <tr>
                <th>Session</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Session 1</td><td>10/15/2024</td><td>Completed</td></tr>
              <tr><td>Session 2</td><td>10/16/2024</td><td>In Progress</td></tr>
              <tr><td>Session 3</td><td>10/17/2024</td><td>Completed</td></tr>
              <tr><td>Session 4</td><td>10/18/2024</td><td>Completed</td></tr>
              <tr><td>Session 5</td><td>10/19/2024</td><td>In Progress</td></tr>
              <tr><td>Session 6</td><td>10/20/2024</td><td>Completed</td></tr>
              <tr><td>Session 7</td><td>10/21/2024</td><td>Completed</td></tr>
              <tr><td>Session 8</td><td>10/22/2024</td><td>In Progress</td></tr>
              <tr><td>Session 9</td><td>10/23/2024</td><td>Completed</td></tr>
              <tr><td>Session 10</td><td>10/24/2024</td><td>Completed</td></tr>
            </tbody>
          </table>

          {/* Existing Quiz Results Table */}
          <h3>Quiz Results</h3>
          <table>
            <thead>
              <tr>
                <th>Quiz Name</th>
                <th>User</th>
                <th>Score</th>
                <th>Date Taken</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Quiz 1: Basic Mechanics</td><td>User 1</td><td>85%</td><td>10/12/2024</td></tr>
              <tr><td>Quiz 2: Combat</td><td>User 2</td><td>90%</td><td>10/13/2024</td></tr>
              <tr><td>Quiz 3: Spellcasting</td><td>User 3</td><td>75%</td><td>10/14/2024</td></tr>
              <tr><td>Quiz 4: World Building</td><td>User 4</td><td>92%</td><td>10/15/2024</td></tr>
              <tr><td>Quiz 5: NPC Management</td><td>User 5</td><td>88%</td><td>10/16/2024</td></tr>
              <tr><td>Quiz 6: Combat Tactics</td><td>User 6</td><td>81%</td><td>10/17/2024</td></tr>
              <tr><td>Quiz 7: Role-playing</td><td>User 7</td><td>79%</td><td>10/18/2024</td></tr>
              <tr><td>Quiz 8: Encounters</td><td>User 8</td><td>94%</td><td>10/19/2024</td></tr>
              <tr><td>Quiz 9: Dungeon Design</td><td>User 9</td><td>85%</td><td>10/20/2024</td></tr>
              <tr><td>Quiz 10: Boss Fights</td><td>User 10</td><td>80%</td><td>10/21/2024</td></tr>
            </tbody>
          </table>

          {/* New User Login Info Table */}
          <h3>User Login Information</h3>
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.email}</td>
                  <td>
                    <button>View</button>
                  </td>
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
