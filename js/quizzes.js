document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.quiz-question');
    const scoreDisplay = document.getElementById('score-display');
    let currentQuestion = 0;
    let score = 0;
  
    document.querySelectorAll('.continue-btn').forEach(button => {
      button.addEventListener('click', () => {
        const currentQuizQuestion = questions[currentQuestion];
        const selectedAnswer = currentQuizQuestion.querySelector('input:checked');
  
        if (!selectedAnswer) {
          alert('Please select an answer before continuing.');
          return;
        }
  
        if (
          (currentQuestion === 0 && selectedAnswer.value === "check") || 
          (currentQuestion === 1 && selectedAnswer.value === "saving_throw") ||
          (currentQuestion === 2 && selectedAnswer.value === "check") ||
          (currentQuestion === 3 && selectedAnswer.value === "saving_throw") ||
          (currentQuestion === 4 && selectedAnswer.value === "check")
        ) {
          score++;
        }
  
        questions[currentQuestion].classList.remove('active');
        currentQuestion++;
  
        if (currentQuestion < questions.length) {
          questions[currentQuestion].classList.add('active');
        } else {
          showResults();
        }
      });
    });
  
    function showResults() {
      document.querySelector('.quiz-results').style.display = 'block';
      scoreDisplay.innerHTML = `You scored ${score} out of ${questions.length}!`;
    }
  
    document.querySelector('.restart-btn').addEventListener('click', () => {
      location.reload();
    });
  });
  