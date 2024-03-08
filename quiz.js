const questions = [
    {
        question: "Where is the correct place to insert a JavaScript?",
        answer: [
            {answ: "The <body> section", correctAns: true},
            {answ: "Below the <body> section", correctAns: false},
            {answ: "Both the <head> section and the <body> section are correct", correctAns: false},
            {answ: "The <head> section", correctAns: false},
        ]
    },
    {
      question: "'Red', '1989' and 'Folklore' are all albums by which pop artist?",
      answer: [
          {answ: "Taylor Swift", correctAns: true},
          {answ: "Lady Gaga", correctAns: false},
          {answ: "Harry Styles", correctAns: false},
          {answ: "Dua Lipa", correctAns: false},
        ]
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      answer: [
          {answ: "+", correctAns: false},
          {answ: "-", correctAns: false},
          {answ: "=", correctAns: true},
          {answ: "*", correctAns: false},
        ]
    },
    {
      question: "Which anime series is set in the world of Amestris?",
      answer: [
          {answ: "Black Clover", correctAns: false},
          {answ: "Fullmetal Alchemist", correctAns: true},
          {answ: "Naruto", correctAns: false},
          {answ: "Pokemon", correctAns: false},
        ]
    },
    {
      question: "How does a FOR loop start?",
      answer: [
          {answ: "for (i = 0; i <= 5)", correctAns: false},
          {answ: "for (i = 0; i <= 5; i++)", correctAns: true},
          {answ: "Bfor i = 1 to 5", correctAns: false},
          {answ: "for (i <= 5; i++)", correctAns: false},
        ]
    },
    {
      question: "What is the correct HTML for making a text input field?",
      answer: [
          {answ: "<textinput type=\"text\">", correctAns: false},
          {answ: "<input type=\"textfield\">", correctAns: false},
          {answ: "<textfield>", correctAns: false},
          {answ: "<input type=\"text\">", correctAns: true},
        ]
    },
    {
      question: "Which sea creature has three hearts?",
      answer: [
          {answ: "Octopus", correctAns: true},
          {answ: "Whale", correctAns: false},
          {answ: "jellyfish", correctAns: false},
          {answ: "Dolphin", correctAns: false},
        ]
    },
    {
      question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      answer: [
          {answ: "longdesc", correctAns: false},
          {answ: "src", correctAns: false},
          {answ: "alt", correctAns: true},
          {answ: "title", correctAns: false},
        ]
    },
    {
      question: "Whose body gained the properties of rubber after unintentionally eating a Devil Fruit?",
      answer: [
          {answ: "Roronoa Zoro", correctAns: false},
          {answ: "Portgas D. Ace", correctAns: false},
          {answ: "Nico Robin", correctAns: false},
          {answ: "Monkey D.Luffy", correctAns: true},
        ]
    },
    {
      question: "What artist has the most streams on Spotify?",
      answer: [
          {answ: "Bad Bunny", correctAns: false},
          {answ: "Taylor Swift", correctAns: false},
          {answ: "Drake", correctAns: true},
          {answ: "The Weeknd", correctAns: false},
        ]
    },
]

const ques = document.querySelector("#question");
const answers = document.querySelector("#answers");
const nextQues = document.querySelector("#cngQues");
const startBtn = document.querySelector('#start-btn');
const startGame = document.querySelector('.questions');
const restartBtn = document.querySelector('#restart-btn');

startBtn.addEventListener('click', () => {
  startBtn.classList.add('hide');
  startGame.classList.remove('hide');
})

  
let currentQuiz = 0;
let score = 0;
  
const startQuiz = () => {
  currentQuiz = 0;
  score = 0;
  nextQues.innerText = "Next Ques";
  showQues();
};
  
const showQues = () => {
  reset();
  if (currentQuiz < questions.length) {
    let quizNo = currentQuiz + 1;
    const currentQues = questions[currentQuiz];
    ques.innerText = quizNo + ". " + currentQues.question;
    showAns(currentQues.answer);
  } else {
    showScore();
  }
};
  
const showAns = (answerOptions) => {
  for (const answer of answerOptions) {
    const answerAnsBtn = document.createElement("button");
    answerAnsBtn.innerText = answer.answ;
    answerAnsBtn.classList.add("ans");
    answerAnsBtn.dataset.correctAns = answer.correctAns;
    answerAnsBtn.addEventListener("click", selectAns);
    answers.appendChild(answerAnsBtn);
  }
};
  
const reset = () => {
  nextQues.style.display = "none";
  while (answers.firstChild) {
    answers.removeChild(answers.firstChild);
  }
};
  
const selectAns = (event) => {
  const selectedAnswer = event.target;
  if (selectedAnswer.dataset.correctAns === "true") {
    score++;
  }
  Array.from(answers.children).forEach((btn) => {
    btn.disabled = true;
  });
  nextQues.style.display = "block";
};
  
const showScore = () => {
  ques.innerText = "Quiz Completed!";
  ques.style.fontSize = "30px"
  const scoreText = document.createElement("h3");
  scoreText.classList.add('h3')
  scoreText.innerText = "Your score: " + score + "/" + questions.length;
  answers.appendChild(scoreText);
  nextQues.style.display = "none";
  restartBtn.classList.remove('hide');
  restartBtn.innerText = "Restart";
  restartBtn.addEventListener('click', restartGame);
};
  
nextQues.addEventListener("click", () => {
  currentQuiz++;
  showQues();
});

const restartGame = () => {
  restartBtn.classList.add('hide');
  currentQuiz = 0;
  score =  0;
  showQues();
}

  
startQuiz();
  
