

//Render counter for hard mode

window.renderCounterHard = function () {


    if (count <= questionTime) {      //counter progessing 
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        // change progress color to red
        answerIsWrong();
        if (runningQuestion < lastQuestion) {  //Checking last question

            runningQuestion++;
            renderQuestion("questionsHard");
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// Check answer for hard mode
window.checkAnswerHard = function (answer) {

    if (answer == questionsHard[runningQuestion].correct) { // answer is correct
        
        score++;
       
        answerIsCorrect();  // change progress color to green
    }


    else { // answer is wrong
        
        
        answerIsWrong();  // change progress color to red
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion("questionsHard");
    } else {
        
        clearInterval(TIMER);

        scoreRender(); // end the quiz and show the score
    }
}


//Start Hard mode
window.hard_start= function(){
    logo.style.display= "none";
    gamebg();
    insertopt("checkAnswerHard(\"A\")","checkAnswerHard(\"B\")","checkAnswerHard(\"C\")");
    hide_menu();
    renderQuestion("questionsHard");
    quiz.style.display = "block";
    renderProgress();
    renderCounterHard();
    TIMER = setInterval(renderCounterHard,1000); // 1000ms = 1s
}