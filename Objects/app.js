// // var arr = ['a', 'e' , 'i', 'o', 'u']
// // console.log(arr);

// // var user = {
// //     firstName: 'Abdul',
// //     lastName: 'Qayoom',
// //     age: '20',
// // }
// // console.log(user)

// var plan1 = {
//   name: "Basic",
//   price: 1000,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
//   discountMonths : [6, 9, 11],
// //   a
// };
// var plan2 = {
//   name: "Pro",
//   price: 2000,
//   space: 500,
//   transfer: 5000,
//   pages: 50,
// };
// var plan3 = {
//   name: "Ultimate",
//   price: 5000,
//   space: 2000,
//   transfer: 20000,
//   pages: 500,
// };

// // plan1.discountMonths = [10, 2, 4];

// // alert("The cost of the " + plan1.name + " plan is " + plan1.price + "$ per month")
// console.log(plan1)
// var mo = plan1.discountMonths[2]
// console.log(mo)

// delete plan1.discountMonths
// var checkIfExist = 'discountMonths' in plan1
// console.log(checkIfExist)

// console.log(plan1)

var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  transfer: 1000,
  pages: 10,
  discountMonths: [5, 7],
  calcAnnual: function(discount){
    var bestPrice = this.price
    var date = new Date();
    var currMonth = date.getMonth();
    for(var i = 0; i <= this.discountMonths.length; i++){
        if(currMonth === this.discountMonths[i]){
            bestPrice = this.price * discount;
            break;
        }
    }
    console.log( bestPrice * 12);
  }
};


plan1.calcAnnual(.5)


var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  transfer: 1000,
  pages: 10,
  discountMonths: [5, 7],
  calcAnnual: function(discount){
    var bestPrice = this.price
    var date = new Date();
    var currMonth = date.getMonth();
    for(var i = 0; i <= this.discountMonths.length; i++){
        if(currMonth === this.discountMonths[i]){
            bestPrice = this.price * discount;
            break;
        }
    }
    console.log( bestPrice * 12);
  }
};


plan1.calcAnnual(.5)