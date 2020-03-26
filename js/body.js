

//  Creates a div 

window.createDiv = function (id) {                  
    var element = document.createElement("DIV");    //@param id: Div id
    element.setAttribute("id", id);
    document.body.appendChild(element);             //appends div 
  };
  





//Creating Divs

createDiv("container");
createDiv("logo")
createDiv("startEasy");
createDiv("startMedium")

createDiv("startHard");

createDiv("quiz");

createDiv("question");

createDiv("qImg");

createDiv("choices");

createDiv("A");
createDiv("B");
createDiv("C");

document.getElementById("choices").appendChild(A);
document.getElementById("choices").appendChild(B);
document.getElementById("choices").appendChild(C);

createDiv("timer");

createDiv("counter");
createDiv("btimeGauge");
createDiv("timeGauge");
document.getElementById("timer").appendChild(counter);
document.getElementById("timer").appendChild(btimeGauge);
document.getElementById("timer").appendChild(timeGauge);

createDiv("progress");

document.getElementById("quiz").appendChild(question);

document.getElementById("quiz").appendChild(qImg);
document.getElementById("quiz").appendChild(choices);
document.getElementById("quiz").appendChild(timer);
document.getElementById("quiz").appendChild(progress);

createDiv("scoreContainer");

document.getElementById("container").appendChild(logo);
document.getElementById("container").appendChild(startEasy);
document.getElementById("container").appendChild(startMedium);
document.getElementById("container").appendChild(startHard);
document.getElementById("container").appendChild(quiz);
document.getElementById("container").appendChild(scoreContainer)


//Assingning values in Divs

document.getElementById("startEasy").innerHTML = "Easy";
document.getElementById("startMedium").innerHTML = "Medium";
document.getElementById("startHard").innerHTML = "Hard";
document.getElementById("logo").innerHTML="mathO'logic";

document.getElementById("quiz").style.display = "none";
document.getElementById("A").classList.add("choice");
document.getElementById("B").classList.add("choice");
document.getElementById("C").classList.add("choice");


document.getElementById("scoreContainer").style.display = "none";



