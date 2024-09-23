let num = 50.536;

console.log(num, typeof num);
console.log(num.toString());
console.log(num.toFixed(2));
console.log(num.toPrecision(3));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Math);
console.log(Math.sqrt(9));
console.log(Math.abs(5), Math.abs(-5));
console.log(Math.round(4.5), Math.ceil(4.5), Math.floor(4.5));
console.log(Math.pow(2,3));
console.log(Math.min(3,5), Math.max(3,5));
console.log(Math.floor(Math.random() * 100 + 1));

let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);
let s = `x: ${x}\ny: ${y}\nSum: ${x+y}\nDiff: ${x-y}\nProd: ${x*y}\nDiv: ${x/y}\nRem: ${x%y}`;
console.log(s);