// setInterval(console.log('sarwat'), 4000)

// function displayName() {
//   console.log("sarwat");
// }

// setInterval(displayName, 5000);
// setTimeout(displayName, 5000);



// stop watch start karte hain

var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var milliSeconds = document.getElementById("milliseconds");
var index = 0;

minutes.innerText = Number("00");
seconds.innerText = Number("00");

function millisecondsBrhao(){
    index ++
    milliSeconds.innerText = index;
}

setInterval(milliSeconds, 1000)