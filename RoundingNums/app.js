// var num1 = 1.2
// console.log(Math.floor(num1))


var randomNum = Math.ceil(Math.random() * 10);
console.log(randomNum)
var guess = prompt("Guess the number bw 1 to 4");

if(randomNum == guess){
    console.log("U won")
}else{
    console.log("U lose")
}