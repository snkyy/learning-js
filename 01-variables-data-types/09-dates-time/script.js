let date = new Date();
console.log(date);

date = new Date(2000,1,21, 12,30,0);
date = new Date('2000-02-21');
date = new Date('02/21/2000 12:30:00');
date = Date.now();
console.log(date);

date = new Date(1726584269284);
console.log(date);

console.log(date.toString());
console.log(date.getTime(), date.valueOf());
console.log(date.getFullYear(), date.getMonth(), date.getDay());
console.log(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());

let s = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
console.log(s);

let x = Intl.DateTimeFormat('en-US').format(date);
console.log(x);
x = Intl.DateTimeFormat('en-US', {month: 'short', day: 'numeric', year: 'numeric'}).format(date);
console.log(x);
x = date.toLocaleString('default', {month: 'short', day: 'numeric', year: 'numeric', weekday: 'long'});
console.log(x);