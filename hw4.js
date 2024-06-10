// Task 1.1

// function calcRectangleArea(width, height) {

//     if (typeof width !== 'number' || typeof height !== 'number') {
//         throw new Error('Width and height must be numbers.');
//     }

//     return width * height;

//  }


// try {
//     let width = 5;
//     let height = 2;
//     let area = calcRectangleArea(width, height);
//     console.log(`The area of the rectangle is ${area}`);
// } catch (error) {
//     console.log(error.message);
// }

// try {
//     let width = '6';
//     let height = 8;
//     let area = calcRectangleArea(width, height);
//     console.log(`The area of the rectangle is ${area}`);
// } catch (error) {
//     console.log(error.message);
// }

// Task 1.2
// function calcRectangleArea(width, height) {
//     try {
//           if (typeof width !== 'number' || typeof height !== 'number') {
//             throw new Error('Width and height must be numbers.');
//         }
        
//             return console.log(`The area of the rectangle is ${width*height}`);
//     } catch (error) {
        
//         console.log(error.message);
        
//     }
// }

//     // let width = 5;
//     let width = '2';
//     let height = 3;
//     calcRectangleArea(width, height);


// Task 2

// function checkAge() {
//     try {
//          let age = prompt("Please enter your age:");

//         if (!age) {
//             throw new Error("The field is empty! Please enter your age.");
//         }

//         age = Number(age);

//         if (isNaN(age)) {
//             throw new Error("Please enter a numeric value.");
//         }

//         if (age < 14) {
//             throw new Error("You are too young. Access is denied.");
//         }

//          alert("You have access to watch the movie.");
//     } catch (error) {
      
//         alert(`${error.name} - ${error.message}`);
//     }
// }

// checkAge();
   

// Task 3


// class MonthException extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'MonthException';
//     }
// }

// function showMonthName(month) {
//     const months = [
//         'January', 'February', 'March', 'April', 'May', 'June',
//         'July', 'August', 'September', 'October', 'November', 'December'
//     ];
    
//         if (month < 1 || month > 12) {
//         throw new MonthException('Incorrect month number');
//     }
    
//        return months[month - 1];
// }


// try {
//     console.log(showMonthName(3)); 
// } catch (error) {
//     console.log(`${error.name} ${error.message}`);
// }

// try {
//     console.log(showMonthName(28)); 
// } catch (error) {
//     console.log(`${error.name} ${error.message}`);
// }

// Task 4

function showUser(id) {
    if (id < 0) {
        throw new Error('ID must not be negative: ' + id);
    }
    return { id: id };
}

function showUsers(ids) {
    let result = [];
    for (let id of ids) {
        try {
            result.push(showUser(id));
        } catch (error) {
            console.log(error.message);
        }
    }
    return result;
}


let users = showUsers([7, -12, 44, 22 ]);
console.log(users);