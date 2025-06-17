var userChoice = prompt("Stone paper or scissor")
var choices = [ 'rock', 'paper', 'scissor']
var computerChoice = choices[Math.floor(Math.random() * 3)]
// console.log(computerChoice)

if(userChoice === computerChoice){
    alert("It's a draw")
} else if(
    (userChoice == 'rock' && computerChoice == 'scissor') ||  
    (userChoice == 'paper' && computerChoice == 'rock') ||  
    (userChoice == 'scissor' && computerChoice == 'paper') 
){
    alert("You Won")
}else{
    alert("You lose")
}
