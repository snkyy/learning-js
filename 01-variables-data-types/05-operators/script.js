let x;
x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;

x = 'Hello' + ' ' + 'World';
console.log(x);
x = 2 ** 3;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

x = 10;
x += 5;
x -= 5;
x *= 3;
x /= 3;
x %= 11;
x **= 5;
console.log(x);

x = 2 == '2';
console.log(x); // true (== doesn't check if types are the same)
x = 2 === '2';
console.log(x); // false (=== does)
x = 2 != '2';
console.log(x); // false
x = 2 !== '2';
console.log(x); // true

x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;