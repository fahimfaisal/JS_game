
//Render counter for hard mode

window.renderCounterMed = function () {


    if (count <= questionTime) { //counter progressing 
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        
        answerIsWrong(); // change progress color to red
        if (runningQuestion < lastQuestion) {  //Checking last question


            runningQuestion++;
            renderQuestion("questionsMedium");
        } else {
            
            clearInterval(TIMER);
            scoreRender();   // end the quiz and show the score
        }
    }
}

// Check answer for hard mode
window.checkAnswerMedium = function (answer) {

    if (answer == questionsMedium[runningQuestion].correct) { // answer is correct
        
        
        score++;
        
        answerIsCorrect();  // change progress color to green
    }


    else { //answer is wrong
        
        
        answerIsWrong();  // change progress color to red
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion("questionsMedium");
    } else {
        
        clearInterval(TIMER);

        scoreRender(); // end the quiz and show the score
    }
}

//Start hard mode
window.medium_start= function(){
    logo.style.display= "none";  
    gamebg();
    insertopt("checkAnswerMedium(\"A\")","checkAnswerMedium(\"B\")","checkAnswerMedium(\"C\")");
    hide_menu();
    renderQuestion("questionsMedium");
    quiz.style.display = "block";
    renderProgress();
    renderCounterMed();
    TIMER = setInterval(renderCounterMed,1000); // 1000ms = 1s
}