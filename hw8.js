// Task1

// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x, y, , ...z] = arr;
// console.log(x);
// console.log(y);
// console.log(z);

// Task2

// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
// };

// let { names: [ name1, name2, , name4], ages: [age1 , age2, age3 , age4] } = data;

// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26

// Task3

// function mul(...args) {
//     let product = 1;
//     let isNumber = false;

//     for (let arg of args) {
//         if (typeof arg === 'number') {
//             product *= arg;
//             isNumber = true;
//         }
//     }

//     return isNumber ? product : 0;
// }

// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0

// Task4

// let server = {
//     data: 0,
//     convertToString: function(callback) {
//         callback(() => {
//             return this.data + "";
//         });
//     }
// };

// let client = {
//     server: server,
//     result: "",
//     calc: function(data) {
//         this.server.data = data;
//         this.server.convertToString(this.notification());
//     },
//     notification: function() {
//         return (callback) => {
//             this.result = callback();
//         };
//     }
// };

// client.calc(123);
// console.log(client.result); // "123"
// console.log(typeof client.result); // "string"


// // Task 5

// const keys= [1, 2, 3, 4]
// const values = ["div", "span", "b", "i"]    


// function mapBuilder(keys, values) {
//     const map = new Map();
//     for (let i of keys) {
//         map.set(i, values[i - 1]);
//     }
//     return map;
// }

// const map = mapBuilder(keys, values);
// console.log(map.size);
// console.log(map.get(2));




