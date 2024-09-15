let firstName = 'John';
let lastName = 'Doe';
console.log(firstName, lastName);

let age = 30;
console.log(age);

age = 31;
console.log(age);

let score;
console.log(score); //  undefined
score = 100;
console.log(score);

const x = 2;
const arr = [1, 2, 3, 4];
// arr = [1, 2, 3, 4, 5]; not allowed
arr.push(5);
console.log(arr);

const person = {
    firstName: 'John',
}
person.firstName = 'Max';
person.lastName = 'Doe';
console.log(person);

let a, b, c;
const d = 10, e = 20, f = 30;
console.log(d, e, f);