/**
 * Created by yopat on 2017-01-28.
 */
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2){
    if(choice1 === choice2){
        return "The result is a tie!";
    }
    else if(choic2 === "scissors"){
        return "rock wins";
    }
    else if(choice1 === "paper"){
        return "paper wins";
        if(choice2 === "rock"){
            return "paper wins";
        }
        else{
            return "scissors wins";
        }
    }
}
var result = compare(userChoice, computerChoice);
console.log(result);