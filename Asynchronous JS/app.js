// call back

// function task1(callback) {
//   setTimeout(() => {
//     console.log("Enter the restaurant");
//     callback();
//   }, 1000);
// }
// function task2(callback) {
//   setTimeout(() => {
//     console.log("Call the waiter");
//     callback();
//   }, 2000);
// }
// function task3(callback) {
//   setTimeout(() => {
//     console.log("Order diya");
//     callback();
//   }, 1500);
// }
// function task4(callback) {
//   setTimeout(() => {
//     console.log("wait kiya");
//     callback();
//   }, 4000);
// }
// function task5(callback) {
//   setTimeout(() => {
//     console.log("khana khaya");
//     callback();
//   }, 1000);
// }
// function task6(callback) {
//   setTimeout(() => {
//     console.log("Bill pe ni kiya");
//     callback();
//   }, 1200);
// }
// function task7(callback) {
//   setTimeout(() => {
//     console.log("sarwat ne bartan dhoye");
//     callback();
//   }, 1000);
// }

// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         task5(() => {
//           task6(() => {
//             task7(() => {}); // nawaz sharif
//           });
//         });
//       });
//     });
//   });
// });

// setintervai settimeout clear interval clear setTimeout

// promises

// const promise = new Promise((resolve, reject) => {
//     const alliswell = false;
//     if(alliswell){
//         resolve('sab theek hai')
//     }
//     else{
//         reject('kuch to garbar hai daya')
//     }
// })

// console.log(promise)

// const promise = new Promise((resolve, reject) => {
//     const randomNumber = Math.floor(Math.random() * 10)
//     if(randomNumber <= 5){
//         resolve('sab theek hai', randomNumber )
//     }
//     else{
//         reject('kuch to garbar hai daya', randomNumber)
//     }
// })

// promise.then((value) =>{
//     console.log(value)
// }).catch((error) => {
//     console.error(error)
// })

// const promise1 = new Promise((res, rej) => {
//   res("Enter the restaurant");
// });
// const promise2 = new Promise((res, rej) => {
//   res("Call the waiter");
// });
// const promise3 = new Promise((res, rej) => {
//   res("Order diya");
// });
// const promise4 = new Promise((res, rej) => {
//   rej("wait kiya");
// });
// const promise5 = new Promise((res, rej) => {
//   res("khana khaya");
// });
// const promise6 = new Promise((res, rej) => {
//   res("Bill pe ni kiya");
// });
// const promise7 = new Promise((res, rej) => {
//   res("sarwat ne bartan dhoye");
// });

// promise1
//   .then((value) => {
//     console.log(value);
//     return promise2;
//   })
//   .then((value) => {
//     console.log(value);
//     return promise3;
//   })
//   .then((value) => {
//     console.log(value);
//     return promise4;
//   })
//   .then((value) => {
//     console.log(value);
//     return promise5;
//   }).then((value) => {
//     console.log(value);
//     return promise6;
//   })
//   .then((value) => {
//     console.log(value);
//     return promise7;
//   }).catch((error)=>{
//     console.log(error)
//   })

// const promise1 = new Promise((res, rej) => {
//   res("Promise resolved");
// });
// const promise2 = new Promise((res, rej) => {
//   res("promise rejected");
// });
// const promise3 = new Promise((res, rej) => {
//   res("promise 3 resolved ");
// });

// promise1.then((value) => {
//   console.log(value);
//   promise2.then((value) => {
//     console.log(value);
//     promise3
//       .then((value) => {
//         console.log(value);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });
// });

// Promise.all([promise1, promise2, promise3])
//   .then((data) => {
//     console.log(data[0], data[1], data[2]);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// try catch
// fetch
// async await

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    let products = data.products;

    products.forEach(product => {
        
        // Make sure the container exists
         const container = document.getElementById("product-container");
    
        const productDiv = document.createElement("div");
    
        productDiv.innerHTML = `
          <div class="product-header">
            <img src="${product.thumbnail}" alt="${product.title}" />
            <div class="product-info">
              <h2>${product.title}</h2>
              <p><strong>Brand:</strong> ${product.brand}</p>
              <p><strong>Price:</strong> $${product.price} <small>(-${product.discountPercentage}% off)</small></p>
              <p><strong>Rating:</strong> ${product.rating} ⭐</p>
              <p><strong>Availability:</strong> ${product.availabilityStatus}</p>
              <div><strong>Tags:</strong> ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>
            </div>
          </div>
    
          <div class="reviews">
            <h3>Customer Reviews:</h3>
            ${product.reviews.map(review => `
              <div class="review">
                <span>${review.reviewerName}</span> (${review.rating}⭐): ${review.comment}
              </div>
            `).join('')}
          </div>
    
          <div class="footer">
            <p><strong>Shipping:</strong> ${product.shippingInformation}</p>
            <p><strong>Warranty:</strong> ${product.warrantyInformation}</p>
            <p><strong>Return Policy:</strong> ${product.returnPolicy}</p>
          </div>
        `;
    
        container.appendChild(productDiv);
    });
  })
  .catch(error => {
    console.error("Error fetching users:", error);
  });
