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

function loadQuiz() {
  const currentQuiz = quizData[quizOrder];

  questionElement.textContent = currentQuiz.question;
  firstAnswer.textContent = currentQuiz.first;
  secondAnswer.textContent = currentQuiz.second;
  thirdAnswer.textContent = currentQuiz.third;
  forthAnswer.textContent = currentQuiz.forth;
  fifthAnswer.textContent = currentQuiz.fifth;
}

loadQuiz();

function selectedAnswer() {
  let answer = undefined;

  answerElements.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });

  return answer;
}
