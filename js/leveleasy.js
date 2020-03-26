

//Render counter for easy mode

window.renderCounterEasy = function () {


    if (count <= questionTime) {   //counter progressing 
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        
        answerIsWrong();   // change progress color to red
        if (runningQuestion < lastQuestion) {  //Checking last question

            runningQuestion++;
            renderQuestion("questionsEasy");
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}


// Check answer for easy mode
window.checkAnswerEasy = function (answer) { 

    if (answer == questionsEasy[runningQuestion].correct) { // answer is correct
        
        score++;
        
        answerIsCorrect(); // change progress color to green
    }


    else {   // answer is wrong
        
        
        answerIsWrong();  // change progress color to red
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion("questionsEasy");
    } else {
        
        clearInterval(TIMER);

        scoreRender(); // end the quiz and show the score
    }
}
//Start easy mode
window.easy_start= function(){
    logo.style.display= "none";
    gamebg();
    insertopt("checkAnswerEasy(\"A\")","checkAnswerEasy(\"B\")","checkAnswerEasy(\"C\")");
    hide_menu();
    renderQuestion("questionsEasy");
    quiz.style.display = "block";
    renderProgress();
    renderCounterEasy();
    TIMER = setInterval(renderCounterEasy,1000); // 1000ms = 1s
}
