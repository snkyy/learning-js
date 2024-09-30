const socials = ['Facebook', 'Instagram', 'LinkedIn', 'X'];
socials.forEach(social => {console.log(social)});

function logSocials(social){
    console.log(social);
}
socials.forEach(logSocials);

const words = ['watermelon', 'camera', 'movie', 'spotify', 'john', 'crazy'];
const filteredWords = words.filter(w => w.length <= 5);
console.log(filteredWords);

const numbers = [1,2,3,4,5,6,7,8,9,10];
const filteredNumbers = numbers.filter(n => n % 2 === 0);
console.log(filteredNumbers);

let nums = [1,2,3,4,5];
let doubledNums = nums.map(n => 2 * n);
console.log(nums);
console.log(doubledNums);

let sqrtAndDouble = nums
    .map(n => Math.sqrt(n))
    .map(n => 2 * n);
console.log(sqrtAndDouble);

nums = [1,2,3,4,5,6,7,8,9,10];
const sum = nums.reduce((sum, num) => sum + num, 0);
console.log(sum);

const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 230 },
    { id: 3, name: 'Product 3', price: 30 },
]
const total = cart.reduce((total, product) => total + product.price, 0);
console.log(total);

const people = [
    { firstName: 'John', lastName: 'Doe', email: 'john@doe.com', age: 30, },
    { firstName: 'Jane', lastName: 'Poe', email: 'jane@poe.com', age: 25, },
];
const youngPeople = people
    .filter(p => p.age <= 25)
    .map(p => ({name: p.firstName + ' ' + p.lastName, email: p.email}));
console.log(youngPeople);

nums = [2, -30, 50, 20, -12, -9, 7];
const positiveSum = nums
    .filter(n => (n >= 0))
    .reduce((positiveSum, n) => positiveSum + n, 0);
console.log(positiveSum);

let dict = ['coder', 'programmer', 'developer'];
let capitalizedDict = dict.map(w => (w[0].toUpperCase() + w.slice(1)));
console.log(capitalizedDict);