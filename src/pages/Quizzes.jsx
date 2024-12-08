import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/quizzes.css';
import { quizzes } from '../utils/quizData';

const Quizzes = () => {
  const { id } = useParams();
  const quizId = parseInt(id, 10);
  const questionsData = quizzes[quizId] || [];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Reset state if quizId changes
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
  }, [quizId]);

  const handleAnswerSelect = (isCorrect) => {
    setSelectedAnswer(isCorrect);
  };

  const handleContinue = () => {
    if (selectedAnswer !== null) {
      if (selectedAnswer) setScore(score + 1);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questionsData.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
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

  if (questionsData.length === 0) {
    return (
      <main className="quiz-section">
        <h2>Quiz not found</h2>
        <button className="return-btn" onClick={() => navigate('/dashboard')}>Return to Dashboard</button>
      </main>
    );
  }

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
          <h2 className="quiz-title">Quiz {quizId}</h2>
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
