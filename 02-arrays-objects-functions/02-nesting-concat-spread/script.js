const fruits = ['apple', 'pear', 'banana'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// nesting
fruits.push(berries);
console.log(fruits);
console.log(fruits[3][1]);
fruits.pop();

let allFruits = [fruits, berries];
console.log(allFruits);

// concat
allFruits = fruits.concat(berries);
console.log(allFruits);

// spread
allFruits = [...fruits, ...berries];
console.log(allFruits);

const arr = [1, [2], 3, [4, 5], 6];
console.log(arr);
console.log(arr.flat());
console.log(arr);

console.log(Array.isArray(fruits), Array.isArray('test'));
console.log(Array.from('12345'));
console.log(Array.of('a', 'b', 'c'));

const array = [1, 2, 3, 4, 5];
array.push(6);
array.unshift(0);
array.reverse();
console.log(array);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
let arr3 = arr1.slice(0, 4).concat(arr2);
console.log(arr3);