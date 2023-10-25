// Iteration 8: Making scoreboard functional

var Score =  document.getElementById("score-board")

var value = localStorage.getItem("score")

Score.textContent=value ;

var again = document.getElementById("play-again-button")

again.addEventListener("click",(e => {

    location.href="game.html"

}))