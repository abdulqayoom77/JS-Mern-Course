var tagNameSeGetKaro = document.getElementsByTagName("h1");
var IdSeGetKaro = document.getElementById("kuchBhi");
// var buttonChange = document.getElementById('button');

function colorChanger() {
  IdSeGetKaro.style.fontSize = "100px";
}

var day = prompt("Enter your day").toLowerCase();

switch (day) {
  case "sat":
    alert("chutti hai");
    break;
  case "sun":
    alert("chutti hai");
    break;
  case "mon":
    alert("office ao");
    break;
  case "tue":
    alert("chutti ni hai");
    break;
  case "fri":
    alert("zaroor ao");
    break;
  default:
    alert("shoot me now");
}

if (day == "sat") {
  alert("chutti hai");
} else if (day == "sun") {
  alert("chutti hai");
} else if (day == "mon") {
  alert("chutti ni hai");
} else {
  alert("shoot me now");
}
