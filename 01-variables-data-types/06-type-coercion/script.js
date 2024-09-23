let x = 5 + '5';
console.log(x, typeof x); // '55' string

x = 5 + Number('5');
x = 5 * '5';
x = 5 + null;
x = 5 + true; // 6
x = 5 + false;
console.log(x, typeof x); // number

