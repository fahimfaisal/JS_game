

//The main function to run the game

window.game= function(){
    
    document.getElementById("container").style.backgroundImage= "url('img/main.gif')"; // set backgroud image
    
    //Button for the modes
    startEasy.addEventListener("click", easy_start); 
    
    startMedium.addEventListener("click", medium_start);
    startHard.addEventListener("click", hard_start);


    }

    window.onload= game;













