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

// hide quiz questions in the beginning
// mainPageEl.style.display = "none";
var timeLeft = 90;
// set a timer function
function timer() {
    introPage.style.display = "none";
    // show main page
    mainPageEl.style.display


    var timeInterval = setInterval(function() {
        if (timeLeft>-1) {
        timerEl.textContent = timeLeft  
        timeLeft--;
        }
        else {
        timerEl.textContent = "Time's Up!"
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
        question: "Which notation is used to index an array",
        answers: [
            {opt: "[]", isCorrect: true},
            {opt: "<>", isCorrect: false},
            {opt: "()", isCorrect: false},
            {opt: "select", isCorrect: false},
        ],
        q: 1
    },

]

// referenced site https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/
function startQuiz(q) {
    // set a starting score of 0
    var score = 0
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
            score++
            console.log(score)
        }
        else {
            resultEl.textContent = "Wrong"
            timeLeft = timeLeft - 10
        }
    }
    // once option is clicked, move onto next question
    // when option is clicked, evaluate whether the answer is right or wrong and move on to next question
    answerOneEl.addEventListener("click", function(){
        selected = answerOneEl.value
        evaluate();
    })
    answerTwoEl.addEventListener("click", function(){
        selected = answerTwoEl.value
        evaluate();
    })
    answerThreeEl.addEventListener("click", function(){
        selected = answerThreeEl.value
        evaluate();
    })
    answerFourEl.addEventListener("click", function(){
        selected = answerFourEl.value
        evaluate();
    })
}


// when intro button is clicked, begin the timer
introBtnEl.addEventListener("click", timer);
// when intro button is clicked, run the quiz function
introBtnEl.addEventListener("click",startQuiz(0));
// when any answer button is clicked, evaluate whether or not correct answer was chosen