// Task 1

// test('Testing suming 0.1 + 0. is 0.3'), () => {
//     const floatNumber = 0.1 + 0.2;
//     expect(num).toBeclose(0.3);
// };

// Task 2

// const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

// test('Testing userList', () => {
//     expect(userList).toContain('admin');
//     expect(userList).toBe('Nick');
//     expect(userList).toBe('new_user_2');
//     expect(userList).toHavelength(5);
//     expect(typeof userList[3] === 'string').toBeTruthy();
//     expect(userlist[8] === undefined).toBeTruthy();
// })

// Task 3

// function getCiercleLength(radius) {
//     return 2 * Math.PI * radius;
// }

// function getCircleArea(radius) {
//     return Math.PI * radius ** 2;
// }

// const circle = require('../src/circle');
// test('Testing the length of the circle function', () => {
//     expect(getCiercleLength(22).toBe(138.2, 1));
//     expect(getCiercleLength()).toBeNan();
// });

// test('Testing the area of the circle function', () => {
//     expect(getCircleArea(5)).toBeClose(254.47);
//     expect(getCircleArea()).toBeNaN();
// });

// Task 4

// function filterFoodPrice(food, min, max) {
//     return food.filter(item => item.price >= min && item.price <= max);
// }

// const food = [
//     { kind: 'potato', price: 10 },
//     { kind: 'bread', price: 16 },
//     { kind: 'pepper', price: 27 },
//     { kind: 'banana', price: 32 },
//     { kind: 'lemon', price: 50 }
// ];

// test('Testing filterFoodPrice() function', () => {
//     const min = 12;
//     const max = 40;
//     const filterFood = filterFoodPrice(food, min, max);

//     expect(filterFood).toHavelength(3);
//     expect(filterFood).toContainEqual([{ kind: 'pepper', price: 27 }]);
//     expect(filterFood).toContainEqual([{ kind: 'bread', price: 16 }, { kind: 'pepper', price: 27 },
//     { kind: 'banana', price: 32 }]);
//     expect(filterFood[0].price).toBeGreaterOrEqual(min);
//     expect(filterFood[2].price).toBeLessThanOrEqual(max);
//     expect(filterFood).not.toContainEqual({ kind: 'lemon', price: 50 });
//     })
