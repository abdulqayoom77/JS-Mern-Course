// var $name = prompt("Enter your name")
// console.log($name);

// console.log(1 == "1")
// console.log(1 === "1")

// var cities = []

// cities[0] = 'karachi'
// cities[1] = 'lahore'
// cities[5] = 'islamabad'

// console.log(cities[2])


// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

// for(var i=0; i< cleanestCities.length ; i++){
//     console.log(cleanestCities[i])
// }



// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

// for(var i = 0; i< firstNames.length; i++){
    
//     for(var j = 0; j< lastNames.length; j++){
//         console.log(firstNames[i] + lastNames[j])
//     }

// }


// var month = prompt("Enter month of birth")

// if(month.length > 3){
//     var monthAbbr = month.slice(0,3)
// }

// console.log(monthAbbr)



var fullName = prompt('Enter your full name')
var firstChar = fullName.slice(0,1).toUpperCase()
// console.log(firstChar)
var fullLength = fullName.length + 1
var lastChrs = fullName.slice(1, fullLength).toLowerCase()
var modifiedFullName = firstChar + lastChrs
console.log(modifiedFullName)