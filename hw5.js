// Task 1

// function propsCount(currentObject) {
//     return Object.keys(currentObject).length;
// };

// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web development",
//     students: 10
// }

// console.log(propsCount(mentor));

// Task 2

// function showProps(currentObject)

//  {
//     console.log(Object.keys(currentObject));
//     console.log(Object.values(currentObject));
// }

// let person= {
//     occupation: "QA",
//     age: 46,
//     children:2,
//     hobby: "coding"
// }

// console.log (showProps(person));

// Task 3

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     showFullName() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }

// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }

//     showFullName(middleName) {
//          const fullname = (`${this.surname} ${this.name} ${middleName}`);
//          return fullname;
//     }

//     showCourse() {
//         const currentYear = new Date().getFullYear();
//         const course = currentYear - this.year;
//         return course;
//     };
// };
//     const stud1 = new Student("Petro", "Petrenko", 2015);
//     console.log(stud1.showFullName("Petrovych"));
//     console.log("Current course: " + stud1.showCourse());

// Task 4

// const workerList=[];

// class Worker {
//     #experience = 1.2;

//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//         workerList.push(this);
//     }

//     showSalary() {
//         const salary = this.dayRate * this.workingDays;
//         console.log(`${this.fullName}: ${salary}`);}
        
//     showSalaryWithExperience() {
//         const salary = this.dayRate * this.workingDays * this.#experience;
//         console.log(`${this.fullName} (with experience): ${salary}`);
    
//     }

//     showSalaryWorker() {
//         return `${this.dayRate* this.workingDays* this.#experience}`;
//     }

//     get experience() {
//         return this.#experience;
//     }

//     set experience(value) {
//         this.#experience = value;
//     }
//     sortSalaries(workerArray) {
//         let sortedSalary = workerArray.sort(function(a,b) {
//             return a.showSalaryWorker() - b.showSalaryWorker();
//         })

//         for (let i=0; i<sortedSalary.length; i++) {
//             console.log(sortedSalary[i].fullName + ": " + sortedSalary[i].showSalary);
//         }
//     }
// }

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// // worker1.showSalaryWithExperience();

// Task 5

// class GeometricFigure {
//     getArea() {
//         return 0;
//     }
//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }

// class Triangle extends GeometricFigure {
//     constructor(b, h) {
//         super();
//         this.base = b;
//         this.height = h;
//     }

//     getArea() {
//         return 0.5 * this.base * this.height;
//     }
// }

// class Square extends GeometricFigure {
//     constructor(a) {
//         super();
//         this.side = a;
//     }
//     getArea() {
//         return this.side ** 2;
//     }
// }

// class Circle extends GeometricFigure {
//     constructor(r) {
//         super();
//         this.radius = r;
//     }
//     getArea() {
//         return Math.PI * this.radius ** 2;
//     }
// }

// function handleFigures(figures) { 
//     return figures.reduce(function (sum, figure) {
//         if (figure instanceof GeometricFigure) {
//             console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`)
//             return sum + figure.getArea();
//         }
//         throw Error("Bad argument figure.");
//     }, 0);


// }

const figures = [new Triangle(4, 5), new Circle(5), new Square(7)];

    console.log(handleFigures(figures));






