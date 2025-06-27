const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: {
      a: "Hyper Text Markup Language",
      b: "Home Tool Markup Language",
      c: "Hyperlinks and Text Markup Language",
      d: "Hyper Tool Multi Language",
    },
    correctAnswer: "a",
  },
  {
    question: "Which language runs in a web browser?",
    options: {
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
    },
    correctAnswer: "d",
  },
  {
    question: "Which company developed React.js?",
    options: {
      a: "Google",
      b: "Facebook",
      c: "Twitter",
      d: "Microsoft",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the output of: 2 + '2' in JavaScript?",
    options: {
      a: "'4'",
      b: "'22'",
      c: "NaN",
      d: "Error",
    },
    correctAnswer: "b",
  },
  {
    question: "Which of these is not a programming language?",
    options: {
      a: "HTML",
      b: "Python",
      c: "Ruby",
      d: "Java",
    },
    correctAnswer: "a",
  },
  {
    question: "Which tool is used for version control?",
    options: {
      a: "Git",
      b: "Webpack",
      c: "Docker",
      d: "Node.js",
    },
    correctAnswer: "a",
  },
  {
    question: "What does CSS stand for?",
    options: {
      a: "Creative Style Sheets",
      b: "Cascading Style Sheets",
      c: "Computer Style Sheets",
      d: "Colorful Style Sheets",
    },
    correctAnswer: "b",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: {
      a: "//",
      b: "/* */",
      c: "#",
      d: "<!-- -->",
    },
    correctAnswer: "a",
  },
  {
    question: "Which one is a JavaScript framework?",
    options: {
      a: "Laravel",
      b: "Django",
      c: "React",
      d: "Flask",
    },
    correctAnswer: "c",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: {
      a: "<script>",
      b: "<javascript>",
      c: "<js>",
      d: "<code>",
    },
    correctAnswer: "a",
  },
  {
    question: "Which function is used to print something in JavaScript?",
    options: {
      a: "echo()",
      b: "print()",
      c: "console.log()",
      d: "log()",
    },
    correctAnswer: "c",
  },
  {
    question: "What does API stand for?",
    options: {
      a: "Application Programming Interface",
      b: "Advanced Programming Interface",
      c: "Application Protocol Interface",
      d: "Advanced Protocol Interface",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the default port for HTTP?",
    options: {
      a: "21",
      b: "22",
      c: "80",
      d: "443",
    },
    correctAnswer: "c",
  },
  {
    question: "Which method is used to add elements to an array in JavaScript?",
    options: {
      a: "add()",
      b: "push()",
      c: "insert()",
      d: "append()",
    },
    correctAnswer: "b",
  },
];

var currentQuestionIndex = 0;
var score = 0;
document.getElementById("totalScore").innerText = quizQuestions.length;

function loadQuestion() {
  var currentQuestion = quizQuestions[currentQuestionIndex];
  document.getElementById("question").innerText = currentQuestion.question;
  var options = currentQuestion.options;

  // display button dynamically
  var buttons = document.querySelectorAll("button");
  buttons[0].innerText = options.a;
  buttons[1].innerText = options.b;
  buttons[2].innerText = options.c;
  buttons[3].innerText = options.d;
}

function nextQuestion(selectedOption) {
  var correctOption = quizQuestions[currentQuestionIndex].correctAnswer;
  if (selectedOption == correctOption) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("score").innerText = score;
  localStorage.setItem('score', score)

}

function restartQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").style.display = "none";
  localStorage.clear()
}

loadQuestion();

