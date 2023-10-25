// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

var numBox1 = document.getElementById("number1");
var numBox2 = document.getElementById("number2") ;

var num1;
var num2;

num1 = Math.round(Math.random()*100) ;
num2 = Math.round(Math.random()*100) ;
numBox1.textContent=num1;
numBox2.textContent=num2;

// Iteration 3: Creating variables required to make the game functional

var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var mul = document.getElementById("mul");
var div = document.getElementById("divide");
var mod = document.getElementById("modulus");
var score = 0;
var time = 20;
let timer = document.getElementById('timer')


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

var numBox3 = document.getElementById("number3");
var num3 ;

// Iteration 5: Creating a randomise function to make the game functional

function random() {

    num1 = Math.round(Math.random()*100) ;
    console.log(num1);
    num2 = Math.round(Math.random()*100) ;
    console.log(num2);
    // num3 = Math.round(Math.random()*100) ;
    
    
    numBox1.textContent=num1;
    numBox2.textContent=num2;
    // numBox3.textContent=num3;

    var operator = Math.ceil(Math.random()*5)
    console.log(operator);

    switch (operator) {
        case 1:
            num3 = num1 + num2 ;
            break;
        case 2:
            num3 = num1 - num2 ;
            break;
        case 3:
            num3 = num1 * num2 ;
            break;
        case 4:
            num3 = Math.floor(num1 / num2) ;
            break;
        case 5:
            num3 = num1 % num2 ;
            break;
        default:
            break;
    }
    numBox3.textContent=num3;
    console.log(score);

}
function gameOver() {
    location.href="gameover.html"
}
random()


// Iteration 6: Making the Operators (button) functional

plus.onclick = () =>{
    if (num1 + num2 == num3) {
        score++
        random()
        clearInterval(interval)
        start_timer()
        localStorage.setItem("score",score)
    }
    else{
        gameOver();
    }
}
minus.onclick = () =>{
    if (num1 - num2 == num3) {
        score++
        random()
        clearInterval(interval)
        start_timer()
        localStorage.setItem("score",score)
    }
    else{
        gameOver();
    }
}
mul.onclick = () =>{
    if (num1 * num2 == num3) {
        score++
        random()
        clearInterval(interval)
        start_timer()
        localStorage.setItem("score",score)
    }
    else{
        gameOver();
    }
}
div.onclick = () =>{
    if (Math.floor(num1 / num2) == num3) {
        score++
        random()
        clearInterval(interval)
        start_timer()
        localStorage.setItem("score",score)
    }
    else{
        gameOver();
    }
}
mod.onclick = () =>{
    if (num1 % num2 == num3) {
        score++
        random()
        clearInterval(interval)
        start_timer()
        localStorage.setItem("score",score)
    }
    else{
        gameOver();
    }
}

// Iteration 7: Making Timer functional


timer.textContent = time
let interval ;
function start_timer(){
    time = 20
    interval = setInterval(()=>{
        time--;
        timer.textContent = time
    
        if (time==0){
            clearInterval(interval)
            location.href = './gameover.html'
        }
    
    },1000)
    
}
start_timer()
