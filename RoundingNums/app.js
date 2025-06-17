// // var num1 = 1.2
// // console.log(Math.floor(num1))

// var randomNum = Math.ceil(Math.random() * 10);
// console.log(randomNum)
// var guess = prompt("Guess the number bw 1 to 4");

// if(randomNum == guess){
//     console.log("U won")
// }else{
//     console.log("U lose")
// }

var getHour = document.getElementById("hour");
var getMin = document.getElementById("min");
var getSec = document.getElementById("sec");
var getMilliSec = document.getElementById("milliSec");

var hour = 0;
var min = 0;
var sec = 0;
var milliSec = 0;

function secs() {
  milliSec++;
  if (milliSec >= 100) {
    milliSec = 0;
    sec++;
    if (sec >= 60) {
      sec = 0;
      min++;
      if (min >= 60) {
        min = 0;
        hour++;
      }
    }
  }

  getMilliSec.innerText = milliSec.toString().padStart(2, "0");
  getSec.innerText = sec.toString().padStart(2, "0");
  getMin.innerText = min.toString().padStart(2, "0");
  getHour.innerText = hour.toString().padStart(2, "0");
}
setInterval(secs, 10); // 1 second for realistic timer
