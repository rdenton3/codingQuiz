introBtnEl = document.querySelector(".intro-btn");
introPage = document.querySelector(".intro-page");
timerEl = document.querySelector("#showTimer")

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
    // first need the intro page to disappear


}

// when intro button is clicked, begin the timer
introBtnEl.addEventListener("click", timer);
// when intro button is clicked, run the quiz function
introBtnEl.addEventListener("click",startQuiz);