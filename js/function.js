

// create some variables

var lastQuestion = 9;
var runningQuestion = 0;
var count = 0;
var questionTime = 15; // 10s
var gaugeWidth = 225; // 50px
var gaugeUnit = gaugeWidth / questionTime;
var TIMER;
var score = 0;


//Render questions in screen

window.renderQuestion = function (type) {     //@param type: Level of questions.


    if (type == "questionsEasy") {            //Checking question type

        var q = questionsEasy[runningQuestion];
    } else if (type == "questionsHard") {

        var q = questionsHard[runningQuestion];
    }
    else if (type == "questionsMedium") {
        var q = questionsMedium[runningQuestion];
    }

    question.innerHTML = "<p>" + q.question + "</p>";  // Appending Questions
    A.innerHTML = q.A;
    B.innerHTML = q.B;
    C.innerHTML = q.C;
}









// render progress
window.renderProgress = function () {
    for (var qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";  //Changes the question to next
    }
}









// Answer is correct
window.answerIsCorrect = function () {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0"; //Sets color green in progress bar
}

// Answer is Wrong
window.answerIsWrong = function () {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00"; //Sets color red in progress bar
}

// Renders the score
window.scoreRender = function () {
    scoreContainer.style.display = "block";



    var scorePerCent = Math.round(100 * score / 10); //calculate the amount of question percent answered by the user

    // choose the image based on the scorePerCent
    var img=(scorePerCent >= 80) ? "rawsources/5.png" :
            (scorePerCent >= 60) ? "rawsources/4.png" :
            (scorePerCent >= 40) ? "rawsources/3.png" :
            (scorePerCent >= 20) ? "rawsources/2.png" :
                "rawsources/1.png";

    scoreContainer.innerHTML = "<img src=" + img + ">";
    scoreContainer.innerHTML += "<p>" + scorePerCent + "%</p>";
}

//Hiding the menu
window.hide_menu = function () {
    startEasy.style.display = "none";
    startHard.style.display = "none";
    startMedium.style.display = "none";
    container.style.backgroundColor = "white";
}

//Inserting options according to level
window.insertopt = function (funca, funcb, funcc) {
    document.getElementById("A").setAttribute("onclick", funca);
    document.getElementById("B").setAttribute("onclick", funcb);
    document.getElementById("C").setAttribute("onclick", funcc);
}


//Setting the backgroud Image
window.gamebg = function () {

    document.getElementById("container").style.backgroundImage = "url('img/inside.jpg')";


}
