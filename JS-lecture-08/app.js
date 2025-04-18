// var num1 = 10
// var num2 = 20

// console.log(num1 + num2)
// var num3 = 430
// var num4 = 40

// console.log(num4 + num3)


function subtractTwoNums(a,b) {
    console.log(a - b)
}

subtractTwoNums(50, 40)

// var cleanestCities = ["Cheyenne", "cheyenne", "Santa Fe", "santa fe", "Tucson", tucson", "Great Falls",
//     "great falls", "Honolulu", "honolulu"];


var userInput = prompt("Enter city name")
userInput = userInput.toLowerCase()

var cleanestCities = ["karachi", "lahore fe", "islamabad", "hala", "quetta falls"];

var matchFound = false;
for(var i = 0; i < cleanestCities.length; i++){
    if(userInput === cleanestCities[i]){
        matchFound = true
        alert("It's one of the cleanest cities");
    }
}
if(matchFound == false){
    alert("match not found")
}




// var named = 'SArWaT'.toLowerCase();
// console.log(named)