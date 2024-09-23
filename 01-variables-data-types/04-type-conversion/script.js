let amount = '100';
console.log(amount, typeof amount);

// converting string to number
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);
console.log(amount, typeof amount);

amount = '99.5';
amount = parseFloat(amount);
console.log(amount, typeof amount);

// converting number to string
amount = amount.toString();
amount = String(amount);
console.log(amount, typeof amount);

// number to boolean
amount = 1;
amount = Boolean(amount);
console.log(amount, typeof amount);