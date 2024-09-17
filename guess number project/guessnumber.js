var guessnumber =document.getElementById("guessnumber")
var score = document.getElementById("score")
var randomnumber = Math.floor(Math.random()*10)+1 // generate the random whole number 1 to 10
var result = document.getElementById("result")
var totalscore =10
function check(){
    var enterednumber =guessnumber.value// a value stored on the enterdnumber variable when a number checks run function and checks the stored number and guessnumber if variable contain inside the function 
    if(enterednumber==randomnumber){
        console.log("Right")
        totalscore=totalscore+1
        score.textContent="score"+totalscore
        result.textContent ="Right"
        alert("You Won")
    }
    else{
        totalscore = totalscore-1
        score.textContent="score"+totalscore
        result.textContent="wrong"
    }
}