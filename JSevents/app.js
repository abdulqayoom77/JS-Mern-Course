// document.getElementById('myBtn').addEventListener('click', function(event) {
//   console.log(event); // logs the entire event object
//   console.log(event.type); // "click"
//   console.log(event.target); // the element that was clicked
// });

// function greeting(message, userName){
//     alert(message + " " + userName)
// }



function bulbOn(){
    document.getElementById('img').src = './images/on.jpeg'
    document.getElementById('btn').innerText = 'Double Click To Turn Off'
}
function bulbOff(){
    document.getElementById('img').src = './images/off.jpeg'
    document.getElementById('btn').innerText = 'Click To Turn On'
}