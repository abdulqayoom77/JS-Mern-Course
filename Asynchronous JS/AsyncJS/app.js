// function step1(callback) {
//   setTimeout(() => {
//     console.log("step 1");
//     callback();
//   }, 1000);
// }
// function step2(callback) {
//   setTimeout(() => {
//     console.log("step 2");
//     callback();
//   }, 3000);
// }
// function step3(callback) {
//   setTimeout(() => {
//     console.log("step 3");
//     callback();
//   }, 4000);
// }
// function step4(callback) {
//   setTimeout(() => {
//     console.log("step 4");
//     callback();
//   }, 1200);
// }
// function step5() {
//   setTimeout(() => {
//     console.log("step 5");
//   }, 800);
// }

// step1(() => {
//   step2(() => {
//     step3(() => {
//       step4(() => {
//         step5();
//       });
//     });
//   });
// });

// let prom1 = new Promise((res, rej) => {
//   let resolved = true;
//   if (resolved) {
//     res("Promise Resolved 1");
//   } else {
//     rej("Promise Rejected 1");
//   }
// });
// let prom2 = new Promise((res, rej) => {
//   let resolved = false;
//   if (resolved) {
//     res("Promise Resolved 2");
//   } else {
//     rej("Promise Rejected 2");
//   }
// });
// let prom3 = new Promise((res, rej) => {
//   let resolved = false;
//   if (resolved) {
//     res("Promise Resolved 3");
//   } else {
//     rej("Promise Rejected 3");
//   }
// });

// prom1
//   .then((data) => {
//     console.log(data);
//     return prom2;
//   })
//   .then((data) => {
//     console.log(data);
//     return prom3;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise.all([prom1, prom2, prom3]).then((data) => {
//     console.log(data[0], data[1], data[2]);
// }).catch((err) => {
//     console.log(err);
// })

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     let products = data.products;
//     console.log(products);

//     // productsDiv.innerText = products[0].title

//     products.forEach((item) => {
//       let productsDiv = document.getElementById("products");
//       let productDets = document.createElement("div");
//       productDets.innerHTML = `
//         <div>
//             <h3>${item.title}</h3>
//             <p>${item.description}</p>
//             <p>${item.price}$</p>
//         </div>
//         `;
//       productsDiv.appendChild(productDets);
//     });
//   });

let productsDiv = document.getElementById("products");
async function fetchFromServer() {
  try {
    let fetchData = await fetch("https://dummyjson.com/products");
    let jsonData = await fetchData.json();
    let productsArr = jsonData.products;
    productsArr.forEach((item) => {
      let productDets = document.createElement("div");
      productDets.innerHTML = `
        <div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p>${item.price}$</p>
        </div>
        `;
      productsDiv.appendChild(productDets);
    });
  } catch (error) {
    productsDiv.innerText = "There was some error fetching data from server";
    console.log(error);
  }
}

fetchFromServer();

// console.log("1")
// console.log("2")

// try {
//   console.log(three)
// } catch (error) {
//   console.log(error);
// }

// console.log("3")
// console.log("4")
// console.log("5")
