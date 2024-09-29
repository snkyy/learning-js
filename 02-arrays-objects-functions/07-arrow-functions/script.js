const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => a - b;

const double = a => 2 * a;

const createObj = () => ({
    name: 'John Doe'
});

console.log(add(1,2));
console.log(subtract(10, 5));
console.log(double(5));
console.log(createObj());


const numbers = [1,2,3,4];
numbers.forEach(number => {console.log(number);});

// immediately invoked function expression (IIFE)
(function (name) {
    console.log(name);
})('John Doe');

const getCelsius = (temperature) => {console.log((temperature - 32) * 5 / 9)};
getCelsius(32);

const minMax = (numbers) => ({
    min: Math.min(...numbers),
    max: Math.max(...numbers)
});
console.log(minMax([1,2,3,4,5]));

(function (width, length){
    window.alert(`The area of a rectangle with length of ${length} and width of ${width} is ${length * width}`)
})(10, 15);