let firstNum = document.getElementById("firstNumber");
let secNum = document.getElementById("secondNumber");
let usein = document.getElementById("userInput");
let result = document.getElementById("gameResult");
let timerDisplay = document.getElementById("timer");
let scoreDisplay = document.getElementById("score");

let m, n, sum;
let score = 0;
let timeLeft = 30;
let timer;

// Generate Question
function generateQuestion() {
    m = Math.ceil(Math.random() * 50);
    n = Math.ceil(Math.random() * 50);
    sum = m + n;

    firstNum.textContent = m;
    secNum.textContent = n;

    usein.value = "";
}

// Check Answer
function checkResult() {
    if (parseInt(usein.value) === sum) {
        score++;
        result.textContent = "✅ Correct!";
        result.style.color = "green";
    } else {
        result.textContent = "❌ Wrong!";
        result.style.color = "red";
    }

    scoreDisplay.textContent = score;
    generateQuestion();
}

// Timer Function
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            result.textContent = "⏹ Game Over!";
            alert("Game Over! Your Score: " + score);
        }
    }, 1000);
}

// Restart Game
function restartGame() {
    clearInterval(timer);

    score = 0;
    timeLeft = 30;

    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    result.textContent = "";

    generateQuestion();
    startTimer();
}

// Start game initially
generateQuestion();
startTimer();