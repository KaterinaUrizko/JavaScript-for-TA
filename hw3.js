// Task 1

// let arr=[2,3,4,5]
// let product=1;
// for (let i=0; i<arr.length; i++) {
//     product*=arr[i];
//     console.log(product);
// }

// for(let element of arr){
//     product*=element
//     console.log(product);
// }

// let i=0;
// while (i<arr.length) {
//     product*=arr[i];
//      i++;
//     console.log(product);
// }

// Task 2

// for (i=0; i<=15; i++) {
//     if (i%2===0) {
//         console.log(`${i} is even`)
//     } else { console.log(`${i} is odd`)
//             }
// };

// Task 3

// function randArray(k) {
//     const array = [];
//     for (let i = 0; i < k; i++) {
//       const randomNumber = Math.floor(Math.random() * 500) + 1;
//       array.push(randomNumber);
//     }
//     return array;
//   }

//   const arr=randArray(10);
//   console.log(arr);

// Task 4

// function raiseToDegree(a, b) {
//     if (!Number.isInteger(a) || !Number.isInteger(b)) {
//       return "The inputs must be integers.";
//     }
//     return Math.pow(a, b);
//   }

// function getNumber() {
//     const a = +prompt("Input number a:");
//     const b = +prompt("Input number b:");
//     const result = raiseToDegree(a, b);
//     console.log("Result: " + result);
//   }

//   getNumber();

// Task 5

// function findMin() {
//     let min = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//       if (arguments[i] < min) {
//         min = arguments[i];
//       }
//     }
//     return min;
//   }
//   console.log (findMin(12, 14, 4, -4, 0.2));

// Task 6

// function findUnique(arr) {
    
//     const uniqueArr = new Set(arr);
   
//     return uniqueArr.size === arr.length;
// }

// let arr1 = [6, 2, 3, 4, 5, 6];
// let arr2 = [1, 2, 3, 4, 5];

// console.log(findUnique(arr1));
// console.log(findUnique(arr2));

// Task 7

// function lastElement(arr, x) {
//     return (x==null)? arr.pop(): arr.slice(-x);
// }

// console.log(lastElement([3, 4, 10, -5]));
// console.log(lastElement([3, 4, 10, -5], 2));
// console.log(lastElement([3, 4, 10, -5], 8));


// Task 8

// function bigFirstLatter(str) {
//     const arr = str.split(' ');
//     const newarr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (newarr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1)));

//     }
//     return newarr.join(' ');
// }

// console.log(bigFirstLatter("I love java script"));
