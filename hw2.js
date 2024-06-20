// Task 1;

// let x = 1;
// let y = 2;

// let res1 = String(x)+String(y); // 1-st optoin
// let res1 = x+""+y+""; // 2-nd option

// console.log(res1);
// console.log(typeof res1);


// let res2 = !!x+String(y); // 1-st option
// let res2 = Boolean(x)+String(y); // 2-nd option

// console.log(res2);
// console.log(typeof res2);

// let res3 = Boolean (x+y);
// console.log(res3);
// console.log(typeof res3);

// let res4 =Math.sqrt(-x, y);
// console.log(res4);
// console.log(typeof res4);

// Task 2;

// const m=prompt("Enter a number");
// const result = (m>0 && m%2===0 && m%7===0)? console.log ("Number is correct"): console.log ("Number is incorrect")


// Task 3;
// const arr=[];
// arr[0] = 5;
// arr[1] = "Glory to Ukraine!";
// arr[2] = true;
// arr[3] = null;

// document.write (`The array length is ${arr.length}` + "<br>");

// let data = prompt("Enter any value");
// arr[4] = data;

// document.write (`Fifth element's value of the array is ${arr[4]}` + "<br>");

// arr.shift();
// document.write (arr);

// Task 4;

// let cities = [" Rome ", " Lviv ", " Warsaw "];
// let ribbon = cities.map(city => city.trim()).join(" * ");
// console.log(`"${ribbon}"`);

// Task 5;

// let isAdult = prompt("Enter your age");
// let result = isAdult>=18 ? console.log("You have reached the age of majority"): console.log ("You are still too young");

// Task 6


// let side1=+prompt("Enter the length of the 1-st side");
// let side2=+prompt("Enter the length of the 2-nd side");
// let side3=+prompt("Enter the length of the 3-rd side");

// if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1<=0|| side2<=0|| side3<=0)
//     { console.log("Incorrect data")
// } else {
//     let semiPerimeter = (side1 + side2 + side3) / 2;
//     let area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
//     area = Math.round(area * 1000) / 1000;

//     console.log(`Area of the triangle: ${area}`);

//     let rectangular = (side1 ** 2 + side2 ** 2 === side3 ** 2 ||
//         side1 ** 2 + side3 ** 2 === side2 ** 2 ||
//         side2 ** 2 + side3 ** 2 === side1 ** 2) ? console.log("The triangle is rectangular") :
//         console.log("The triangle is not rectangular")
//     };


// Task 7.1

// let currentTime = new Date().getHours();
// let greeting;
// switch(true) {
    // case (currentTime >= 23 || currentTime < 5):
    //     greeting = "Good night";
    //     break;
    // case (currentTime >= 5 && currentTime < 11):
    //     greeting = "Good morning";
    //     break;
    // case (currentTime >= 11 && currentTime < 17):
    //     greeting = "Good day";
    //     break;
    // default:
    //     greeting = "Good evening";
// console.log(greeting);
// }

// Task 7.2
  
let currentTime = new Date().getHours();
let greeting;

if (currentTime >= 23 || currentTime < 5) {
    greeting = "Good night";
} else if (currentTime >= 5 && currentTime < 11) {
    greeting = "Good morning";
} else if (currentTime >= 11 && currentTime < 17) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);


if (currentTime >= 23 || currentTime < 5) {
    greeting = "Good night";
}
if (currentTime >= 5 && currentTime < 11) {
    greeting = "Good morning";
}
if (currentTime >= 11 && currentTime < 17) {
    greeting = "Good day";
}
else { greeting = "Good evening" };

console.log(greeting)














