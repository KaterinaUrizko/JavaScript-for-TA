// Task 1

// function UpperCase(str) {
//      if (/^[A-Z]/.test(str)) {
//         console.log("String's starts with uppercase character");
//     } else {
//         console.log("String's not starts with uppercase character");
//     }
// }

// checkFirstCase('regexp');
// checkFirstCase('RegExp');



// Task 2

// function checkEmail(email) {
//     const regExp= /\S+@\S+\.\S+/;
//     console.log(regExp.test(email)) ;
// }

// checkEmail("Qmail2@gmail.com");



// Task 3

// const myPattern = /d(b+)(d)/i;
// const myResult = myPattern.exec("cdbBdbsbz");
// console.log(myResult);


// Task 4

// const regex = /(\w+)\s+(\w+)/;
// const str = "Java Script";
// const myResult = str.replace(regex, "$2, $1");
// console.log(myResult);



// // Task 5

// function checkCardNumber(str) {
//     const regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
//     const result = regExp.test(str);
//     if (result) {
//         console.log("Validation successful");
//     } else {
//         console.log("Please try again. Incorrect data input");
//     }
// }
    
// checkCardNumber('2453-6557-2323-8576');
// checkCardNumber('542d-6538-3232-9424');



// Task 6

// function checkEmail(email) {
//     const regex = /^[a-zA-Z0-9]+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
//     if (regex.test(email)) {
//         console.log("Email is correct!");
//     } else {
//         console.log("Email is not correct!");
//     }
// }
// checkEmail('my_ma-il@gmail_il.c_m');



// Task 7

// function checkLogin(data) {
//     const regExp = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
//     const reqNumber = /[0-9\.]+/g;
//     const result = regExp.test(data);
//     const resultNumber = data.match(reqNumber);
//     console.log(`${data} is ${result} - ${resultNumber}`);
// }
// checkLogin('a');
// checkLogin('qwerty126');
// checkLogin('qwe');
