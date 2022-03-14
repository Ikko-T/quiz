const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('input.answer');
const questionElement = document.getElementById('question');
const firstAnswer = document.getElementById('first-answer');
const secondAnswer = document.getElementById('second-answer');
const thirdAnswer = document.getElementById('third-answer');
const forthAnswer = document.getElementById('forth-answer');
const fifthAnswer = document.getElementById('fifth-answer');
const submitBtn = document.getElementById('submit');

let quizOrder = 0;
let score = 0;

function loadQuiz() {
  clearAnswers();

  const currentQuiz = quizData[quizOrder];

  questionElement.textContent = currentQuiz.question;
  firstAnswer.textContent = currentQuiz.first;
  secondAnswer.textContent = currentQuiz.second;
  thirdAnswer.textContent = currentQuiz.third;
  forthAnswer.textContent = currentQuiz.forth;
  fifthAnswer.textContent = currentQuiz.fifth;
}

function selectAnswer() {
  let answer = undefined;

  answerElements.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });
  return answer;
}

function checkAnswer() {
  let answer = selectAnswer();

  if (answer) {
    if (answer === quizData[quizOrder].correct) {
      score++;
    }
  }
  return score;
}

function clearAnswers() {
  answerElements.forEach((answerElement) => {
    answerElement.checked = false;
  });
}

function moveNextQuiz() {
  checkAnswer();

  quizOrder++;

  if (quizOrder < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
                    <h2>You got <span>${score}/${quizData.length}</span> right answers.</h2>
                    <button onclick="location.reload()">One more try?</button>
                  `;
  }
}
