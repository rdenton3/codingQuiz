introBtnEl = document.querySelector(".intro-btn");
introPage = document.querySelector(".intro-page");
timerEl = document.querySelector("#showTimer")
questionEl = document.querySelector(".quiz-question")
answerOneEl = document.querySelector("#btn1")
answerTwoEl = document.querySelector("#btn2")
answerThreeEl = document.querySelector("#btn3")
answerFourEl = document.querySelector("#btn4")

// set a timer function
function timer() {
    var timeLeft = 10;
    introPage.style.display = "none";


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

function startQuiz() {
    var quizQuestions = [
        {
            question: "What is your first name?",
            answers: {
                a: "Tammy",
                b: "Patricia",
                c: "Bob",
                d:"Ellicott"
            },
            correct: "a"
        },
        {
            question: "What is your last name?",
            answers: {
                a: "Smith",
                b: "Frank",
                c: "B",
                d:"Ell"
            },
            correct: "b"
        },

    ]
    questionEl.textContent = "Question one: What si your first name?"
    answerOneEl.textContent = "Leo"
    answerTwoEl.textContent = "Todd"
    answerThreeEl.textContent = "Mary"
    answerFourEl.textContent = "Jane"


    // for (i=0; i<quizQuestions.length; i++) {
    //     questionEl.textContent = quizQuestions[i].question; 
    //     answerOneEl.textContent = quizQuestions[i].answers.a;
    //     answerTwoEl.textContent = quizQuestions[i].answers.b;
    //     answerThreeEl.textContent = quizQuestions[i].answers.c;
    //     answerFourEl.textContent = quizQuestions[i].answers.d;
    // }


}

// when intro button is clicked, begin the timer
introBtnEl.addEventListener("click", timer);
// when intro button is clicked, run the quiz function
introBtnEl.addEventListener("click",startQuiz);