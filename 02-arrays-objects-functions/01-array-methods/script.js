const array = [1, 2, 3, 4, 5];
const fruits = ['apple', 'orange', 'banana'];
const mixed = [1, 'apple', true];
console.log(array, fruits, mixed);

fruits[2] = 'pear';
fruits.push('grape');
console.log(fruits, fruits.length);
fruits.pop();


fruits.unshift('grape');
console.log(fruits);
fruits.shift();
console.log(fruits);

fruits.reverse();
console.log(fruits);

console.log(fruits.includes('apple'), fruits.includes('strawberry'));
console.log(fruits.indexOf('apple'));

let s = fruits.slice(1, 3);
console.log(s, fruits);

s = fruits.splice(1,1);
console.log(s, fruits);

console.log(array.splice(1, 3).reverse().toString());