const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: false,
    address: {
        street: 'street-name',
        city: 'city',
        state: 'state',
    },
    hobbies: ['music', 'climbing'],
};

console.log(person);
console.log(person.name);
console.log(person['age']);
console.log(person.address.street);
console.log(person.hobbies[0]);

person.hasChildren = false;
person.name = 'John Doee';

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

person.greet();

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

let obj3 =  {obj1, obj2};
console.log(obj3);
obj3 = {...obj1, ...obj2};
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(person.hasOwnProperty('name'), person.hasOwnProperty('post-code'));

const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const human = {
    firstName,
    lastName,
    age,
};

console.log(human);

const {address, address: {street}} = person;
console.log(address, street);

const numbers = [23, 67, 33, 48, 52];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);