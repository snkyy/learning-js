// string
const firstName = 'John';
console.log(firstName, typeof firstName);

// number
const age = 18;
const weight = 60.5;
console.log(weight, typeof weight, age, typeof age);

// boolean
const hasKids = true;
console.log(hasKids, typeof hasKids);

// null
const aptNumber = null;
console.log(aptNumber, typeof aptNumber);

// undefined
let variable;
console.log(variable, typeof variable);

// symbol
const id = Symbol('id');
console.log(id, typeof id);

// bigInt
const n = 9007199254740991n;
console.log(n, typeof n);

// objects and functions
const numbers = [1, 2, 3, 4];
console.log(numbers, typeof numbers);

function hello() {
    console.log('Hello');
}
console.log(hello, typeof hello);

// reference types are stored in a heap
const person = {
    firstName: 'John',
    lastName: 'Doe',
}

let newPerson = person;
person.firstName = 'Max';
console.log(person.firstName, newPerson.firstName);
