introBtnEl = document.querySelector(".intro-btn");
introPage = document.querySelector(".intro-page");
mainPageEl = document.querySelector(".quiz-questions")
timerEl = document.querySelector("#showTimer")
questionEl = document.querySelector(".quiz-question")
answerOneEl = document.querySelector("#btn1")
answerTwoEl = document.querySelector("#btn2")
answerThreeEl = document.querySelector("#btn3")
answerFourEl = document.querySelector("#btn4")
resultEl = document.querySelector(".answer-result")
scoreEl = document.querySelector(".score-page")
initialsEl = document.querySelector(".initials")
submitEl = document.querySelector(".submit")
viewHighScoresEl = document.querySelector(".viewHighScores")

// hide quiz questions and score page in the beginning
mainPageEl.style.display = "none";
initialsEl.style.display = "none";

// set a starting score of 0
var score = 0

var timeLeft = 90;
// set a timer function
function timer() {
    introPage.style.display = "none";
    // show main page
    mainPageEl.style.display = "block"


    var timeInterval = setInterval(function() {
        if (timeLeft>-1) {
        timerEl.textContent = timeLeft  
        timeLeft--;
        }
        else {
        timerEl.textContent = "Time's Up!"
        mainPageEl.style.display = "none";
        initialsEl.style.display = "inline"
        scoreEl.textContent = "You have finished the quiz with a score of " + score + ". Please enter your initials:"
        clearInterval(timeInterval);
        }
      }, 1000);
}
// put quiz questions into array which we will then call later on
// referenced site https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/
var quizQuestions = [
    {
        question: "Which coding language is used to style an HTML document?",
        answers: [
            {opt: "JavaScript", isCorrect: false},
            {opt: "Git", isCorrect: false},
            {opt: "CSS", isCorrect: true},
            {opt: "HTML", isCorrect: false},
        ],
        q: 0
    },
    {
        question: "Which notation is used to index an array?",
        answers: [
            {opt: "[ ]", isCorrect: true},
            {opt: "< >", isCorrect: false},
            {opt: "( )", isCorrect: false},
            {opt: "select", isCorrect: false},
        ],
        q: 1
    },
    {
        question: "A loop that never ends is called a(n) ...?",
        answers: [
            {opt: "For loop", isCorrect: false},
            {opt: "While loop", isCorrect: false},
            {opt: "If-else ", isCorrect: false},
            {opt: "Infinite loop", isCorrect: true},
        ],
        q: 2
    },
    {
        question: "Which option is the proper way to call a class with class name 'btn-select' using querySelector in JavaScript?",
        answers: [
            {opt: ".querySelector(#btn-select)", isCorrect: false},
            {opt: "document.querySelector(.btn-select)", isCorrect: true},
            {opt: ".querySelector[#btn-select]", isCorrect: false},
            {opt: "document.querySelector[].btn-select]", isCorrect: false},
        ],
        q: 3
    },
    {
        question: "Which third party API is used to streamline CSS code?",
        answers: [
            {opt: "jQuery", isCorrect: false},
            {opt: "Bootstrap", isCorrect: true},
            {opt: "Flexbox", isCorrect: false},
            {opt: "HTML", isCorrect: false},
        ],
        q: 4
    },

]

// handle the high score page 
// function highScores() {
//     mainPageEl.style.display = "none";
//     initialsEl.style.display = "inline"
//     scoreEl.textContent = "You have finished the quiz with a score of " + score + ". Please enter your initials:"
//     var initial = document.querySelector("input[name='user-initials']").value;
//     var score = score;
//     console.log(initial)
//     console.log(score)
    
// }
// referenced site https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/
function startQuiz(q) {
    // set the question and answers equal to options in questions array
    questionEl.textContent = quizQuestions[q].question; 
    answerOneEl.textContent = quizQuestions[q].answers[0].opt;
    answerTwoEl.textContent = quizQuestions[q].answers[1].opt;
    answerThreeEl.textContent = quizQuestions[q].answers[2].opt;
    answerFourEl.textContent = quizQuestions[q].answers[3].opt;

    // set value to see if answer is correct or incorrect
    answerOneEl.value = quizQuestions[q].answers[0].isCorrect;
    answerTwoEl.value = quizQuestions[q].answers[1].isCorrect;
    answerThreeEl.value = quizQuestions[q].answers[2].isCorrect;
    answerFourEl.value = quizQuestions[q].answers[3].isCorrect;
    
    var selected = "";
    // evaluate if selected answer is correct
    function evaluate () {
        if (selected == "true") {
            resultEl.textContent = "Correct"
            resultEl.style.color = "green"
            score++
        }
        else {
            resultEl.textContent = "Wrong"
            resultEl.style.color = "red"
            timeLeft = timeLeft - 10
        }
    }

    // function to define what to do when option is clicked 

    function one() {
        selected = answerOneEl.value
        evaluate();
        nextQuestion();
    }
    function two() {
        selected = answerTwoEl.value
        evaluate();
        nextQuestion();
    }
    function three() {
        selected = answerThreeEl.value
        evaluate();
        nextQuestion();
    }
    function four() {
        selected = answerFourEl.value
        evaluate();
        nextQuestion();
    }
    
    // once answer is selected, move on to next question
    function nextQuestion () {
        // remove event listeners 
        answerOneEl.removeEventListener("click", one)
        answerTwoEl.removeEventListener("click", two)
        answerThreeEl.removeEventListener("click", three)
        answerFourEl.removeEventListener("click", four)

        if (q<4) {
            q++
            startQuiz(q)
        }
        // // if timer reaches 0, then quiz is over
        // else if (timeLeft) {
        // mainPageEl.style.display = "none";
        // initialsEl.style.display = "inline"
        // scoreEl.textContent = "You have finished the quiz with a score of " + score + ". Please enter your initials:"
        // }
        // else quiz is over and take you to the high score page
        else {
        mainPageEl.style.display = "none";
        initialsEl.style.display = "inline"
        scoreEl.textContent = "You have finished the quiz with a score of " + score + ". Please enter your initials:"
        }
    }
    // once option is clicked, move onto next question
    // when option is clicked, evaluate whether the answer is right or wrong and move on to next question
    answerOneEl.addEventListener("click", one)
    answerTwoEl.addEventListener("click", two)
    answerThreeEl.addEventListener("click", three)
    answerFourEl.addEventListener("click", four)
}

// when user submits their initals, save into local storage
function submit() {
    var userInitials = document.querySelector("input[name='user-initials']").value;

    // check if inputs are empty (validate)
    if (!userInitials) {
    alert("Please enter your initials");
    return false;
    }
  
    //check if high scores already exist, else create an array
    var highScores = JSON.parse(localStorage.getItem("highScores")) || []
    // put new score into an object
    var newHighScore = {initials: userInitials, score: score}
    // push object into an array
    highScores.push(newHighScore)
    // save to local storage
    localStorage.setItem("highScores", JSON.stringify(highScores))

}

// show high scores page
function showHighScores() {
    var savedScores = localStorage.getItem("highScores");
}
// when intro button is clicked, begin the timer
introBtnEl.addEventListener("click", timer);
// when intro button is clicked, run the quiz function
introBtnEl.addEventListener("click",startQuiz(0));
// when submit button is selected save initials and take user to high score page
submitEl.addEventListener("click", submit);
// after submit button is selected, take uer to view high score page
submitEl.addEventListener("click", showHighScores)
viewHighScoresEl.addEventListener("click", showHighScores)
