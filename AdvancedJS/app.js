// var num1 = 1
// console.log(num1)

// let num1 = 5
// function printNum(){
//     console.log()
// }

// function sum(){
//     var num2 = 2
//     console.log(num2)
//     if(true){
//         const num1 = 5;
//         // var num3 = 3;
//     }
//     // console.log(num3)
//     console.log(num1)
// }

// sum()

// const obj = {
//     name: 'sarwat',
//     age: 15
// }

// obj.age = 17

// console.log(obj)

// Data types
let num = 3;
let strring = "qwerty";
let bool = true;
let nothing = null;

// let abc = undefined
// let undef;
// console.log(abc)
// console.log(undef)

// let num1 = 7

// let sym1 = Symbol(num1)
// let sym2 = Symbol(num1)

// console.log(sym1)
// console.log(sym2)

// ternary operator

// let age = prompt("What is your age");
// let check = age < 18 ? alert("you are too young") : alert("you are eligible")

// Prototype

// function Plan(name, price, space, transfer, pages, discountMonths) {
//   this.name = name;
//   this.price = price;
//   this.space = space;
//   this.transfer = transfer;
//   this.pages = pages;
//   this.discountMonths = discountMonths;
//   this.calcAnnual = function (percentIfDisc) {
//     var bestPrice = this.price;

//     var currDate = new Date();
//     var thisMo = currDate.getMonth();
//     for (var i = 0; i < this.discountMonths.length; i++) {
//       if (this.discountMonths[i] === thisMo) {
//         bestPrice = this.price * percentIfDisc;

//         break;
//       }
//     }
//     return bestPrice * 12;
//   };
// } 
// var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [6, 7]);
// var p2 = new Plan("Premium", 5.99, 500, 5000, 50, [6, 7, 11]);
// var p3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [6, 7]);
// // console.log(annualPrice)
// var ann =p2.calcAnnual(.5)
// console.log(ann)


// function Person(name){
//     this.personName = name;
// }

// Person.prototype.Sayhi = function(){
//     console.log(`Hello Miss. ${this.personName}`)
// }

// var p1 = new Person('Sarwat')
// console.log(p1.Sayhi())




// let obj = {
//     num1 : 1,
//     num2 : 2,
//     num3 : 3,
//     num4 : 4,
// }