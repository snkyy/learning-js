const name = 'Matthew';
const age = 24;

let x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';
console.log(x);

x = `Hello, my name is ${name} and I am ${age} years old`;
console.log(x);

let s = 'Hello World';
x = s.__proto__;
console.log(x);

let len = s.length;
console.log(s, s.length);

x = s.toUpperCase();
console.log(x);
x = s.toLowerCase();
console.log(x);

let c = s.charAt(0);
console.log(c, s[0]);

let index = s.indexOf(c);
console.log(index);

x = s.substring(0, 5);
console.log(x);
x = s.substring(6);
console.log(x);
x = s.slice(0, 5);
console.log(x);
x = s.slice(-5); // last 5 chars
console.log(x);

s = '           Hello World';
s = s.trim();
console.log(s);

x = s.replace('World', 'John');
console.log(x);

x = s.includes('Hello');
console.log(x);

console.log(s.split(''));
console.log(s.split(' '));

let myString = 'developer';
myNewString = myString[0].toUpperCase() + myString.substring(1);
console.log(myNewString);