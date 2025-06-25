function Plans(name, price, space, transfer, pages, discountMonths) {
  this.name = name;
  this.price = price;
  this.space = space;
  this.transfer = transfer;
  this.pages = pages;
  this.discountMonths = discountMonths;
  this.calcAnnual = function (discount) {
    var bestPrice = this.price;
    var date = new Date();
    var currMonth = date.getMonth();
    for (var i = 0; i <= this.discountMonths.length; i++) {
      if (currMonth === this.discountMonths[i]) {
        bestPrice = this.price * discount;
        break;
      }
    }
    console.log(bestPrice * 12);
  };
}

var plan1 = new Plans("Plan1", 1000, 100, 500, 10, [7,6]);
var plan2 = new Plans("professional", 2000, 200, 5000, 100, [5,7]);
plan1.calcAnnual(.5)
console.log(plan2);
