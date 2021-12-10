introBtnEl = document.querySelector("#btn1");
timerEl = document.querySelector("#showTimer")

// set a timer function
function timer() {
    var timeLeft = 10;

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

// when intro button is clicked, begin the timer
introBtnEl.addEventListener("click", timer);