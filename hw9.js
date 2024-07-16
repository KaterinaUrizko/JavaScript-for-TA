// Task 1

// function getPromise(message, delay) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve(message);
//     }, delay);
//   });
// }

// getPromise("Hello, World!", 2000).then(function(message) {
//   console.log(message);
// });

// Task 2

// function calcArrProduct(arr) {
//   return new Promise((resolve, reject) => {
//     if (arr.every(element => typeof element === 'number')) {
//       const product = arr.reduce((acc, num) => acc * num, 1);
//       resolve(product);
//     } else {
//       reject("Error! Incorrect array!");
//     }
//   });
// }

// calcArrProduct([1, 2, 3])
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// calcArrProduct([7, "book", 5, 4])
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


// Task 3

// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

// function showNumbers() {
//   let promise = Promise.resolve();

//   for (let i = 0; i <= 10; i++) {
//     const randomDelay = Math.floor(Math.random() * 5000);

//     promise = promise.then(() => delay(i, randomDelay)).then(result => {
//       console.log(result);
//     });
//   }
// }

// showNumbers();

// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

// async function showNumbers() {
//   for (let i = 0; i <= 10; i++) {
//     const randomDelay = Math.floor(Math.random() * 5000); 
//     const result = await delay(i, randomDelay); 
//     console.log(result);
//   }
// }

// showNumbers();
