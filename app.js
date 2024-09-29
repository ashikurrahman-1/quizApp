
const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
        correct: 0
    },

];


let currentQuestion = 0;
let score = 0;
let currentQuestionData = quizData[currentQuestion];
let choices = document.querySelectorAll('.choice');
let nextBtn = document.getElementById('nextBtn');
let scoreContainer = document.getElementById("quiz");

function loadQuestion(){
    document.getElementById('question').textContent = currentQuestion + 1 + ". " + currentQuestionData.question;

    choices.forEach((choice, index) =>{
        choice.textContent = currentQuestionData.choices[index];
        choice.disabled = false;
    })

    nextBtn.style.display = "none";    
}

function selectAnswer(index){
    if(index === currentQuestionData.correct){
        score++;
        choices[index].style.background = "green";
    }else{
        choices[index].style.background = "red";
        choices[currentQuestionData.correct].style.background = "green"
    }
    choices.forEach((choice)=>{
        choice.disabled = true;
    })

    nextBtn.style.display = "block";
}

function nextQuestion(){
    currentQuestion++;
    if(currentQuestion < quizData.length){
        loadQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    scoreContainer.innerHTML = `
        <h4>Quiz Complete</h4>
        <h2>Your Score is ${score} out of ${quizData.length}</h2>
        <button id="restartButton" onclick="restartQuiz()">Restart Quiz</button>
    `
}
function restartQuiz() {
    window.location.reload();
}

window.onload = loadQuestion();