const x = 100, y = 30;

if(x !== y) {
    console.log(`${x} is not equal ${y}`);
} else {
    console.log(`${x} is equal to ${y}`);
}

const hour = new Date().getHours();

if (hour < 12) {
    console.log('Good Morning');
} else if (hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Night');
}

const month = new Date().getMonth();

switch (month) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is February');
        break;
    default:
        console.log('It something different');
}

function calculator(num1, num2, sign){
    switch (sign) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) return num1 / num2;
            break;
        default:
            console.log('Error, unknown math operator');
    }
}

console.log(calculator(5, 2, '+'));
console.log(calculator(5, 2, '-'));
console.log(calculator(5,2,'*'));
console.log(calculator(5,2,'/'));
console.log(calculator(5,2,'&'));