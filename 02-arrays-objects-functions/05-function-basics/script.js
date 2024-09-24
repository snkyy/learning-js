function sayHello() {
    console.log("Hello World!");
}
function add(num1, num2) {
    return num1 + num2;
}

sayHello();
console.log(add(4, 5));

function registerUser(user = 'Bot') {
    return user + ' is registered\n';
}
console.log(registerUser('John Doe'), registerUser());

function sum(...numbers) {
    let total = 0;
    for(const number of numbers) {
        total += number;
    }
    return total;
}
console.log(sum(1,2,3));

function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} has logged in`;
}
const user = {id: 1, name: 'John'};
console.log(loginUser(user));
console.log(loginUser({
    id: 2, name: 'Max'
}));

function getRandomElement(array){
    return array[Math.floor(Math.random() * array.length)];
}

console.log(getRandomElement([1,2,3,4,5,6,7,8]));