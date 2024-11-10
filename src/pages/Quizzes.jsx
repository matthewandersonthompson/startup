// src/pages/Quizzes.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/quizzes.css';

const questionsData = [
  {
    question: "The rogue is trying to sneak past a group of guards. What kind of roll should they make?",
    answers: [
      { text: "Skill Check (Stealth)", value: "check" },
      { text: "Saving Throw (Dexterity)", value: "saving_throw" },
    ],
    correctAnswer: "check",
  },
  {
    question: "A fireball spell explodes near the party. What kind of roll should they make?",
    answers: [
      { text: "Skill Check (Dexterity)", value: "check" },
      { text: "Saving Throw (Dexterity)", value: "saving_throw" },
    ],
    correctAnswer: "saving_throw",
  },
  {
    question: "The bard tries to convince a merchant to lower their prices. What kind of roll should they make?",
    answers: [
      { text: "Skill Check (Persuasion)", value: "check" },
      { text: "Saving Throw (Charisma)", value: "saving_throw" },
    ],
    correctAnswer: "check",
  },
  {
    question: "The party encounters a trap that releases poisonous gas. What kind of roll should they make?",
    answers: [
      { text: "Skill Check (Investigation)", value: "check" },
      { text: "Saving Throw (Constitution)", value: "saving_throw" },
    ],
    correctAnswer: "saving_throw",
  },
  {
    question: "The wizard is attempting to identify a magical artifact. What kind of roll should they make?",
    answers: [
      { text: "Skill Check (Arcana)", value: "check" },
      { text: "Saving Throw (Wisdom)", value: "saving_throw" },
    ],
    correctAnswer: "check",
  },
];

const Quizzes = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  const handleAnswerSelect = (isCorrect) => {
    setSelectedAnswer(isCorrect);
  };

  const handleContinue = () => {
    if (selectedAnswer !== null) {
      if (selectedAnswer) setScore(score + 1);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questionsData.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null); // Reset selected answer for the next question
      } else {
        setShowResults(true);
      }
    } else {
      alert("Please select an answer before continuing.");
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  return (
    <main className="quiz-section">
      {showResults ? (
        <div className="quiz-results">
          <h3>Your Score</h3>
          <p>You scored {score} out of {questionsData.length}!</p>
          <button className="restart-btn" onClick={handleRestart}>Restart Quiz</button>
          <button className="return-btn" onClick={() => navigate('/dashboard')}>Return to Dashboard</button>
        </div>
      ) : (
        <section id="quiz">
          <h2 className="quiz-title">Quiz: Check or Saving Throw?</h2>
          <div className="quiz-question active">
            <p>{currentQuestion + 1}. {questionsData[currentQuestion].question}</p>
            {questionsData[currentQuestion].answers.map((answer, index) => (
              <label key={index} className="custom-radio">
                <input
                  type="radio"
                  name={`question${currentQuestion}`}
                  onClick={() => handleAnswerSelect(answer.value === questionsData[currentQuestion].correctAnswer)}
                />
                <span>{answer.text}</span>
              </label>
            ))}
            <button className="continue-btn" onClick={handleContinue}>
              Continue
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default Quizzes;
