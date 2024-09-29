// values interpreted as false
// false, 0, "", ''. null, undefined, Nan

const empty = '';
const email = 'test@email.com';

if(empty) {
    console.log('That is not true');
}
if(email) {
    console.log('That is a true value');
}

const children = 0; //if(children) === false
if(children !== undefined) {
    console.log(children);
} else {
    console.log('Please enter a missing arguments');
}

const posts = [];
if(posts.length > 0) {
    console.log(posts);
} else {
    console.log('Please enter a valid post');
}

const user = {};
if(Object.keys(user).length > 0) {
    console.log(user);
} else {
    console.log('Please enter a valid user');
}

console.log(false == 0); // true
console.log('' == false); // true
console.log(false === 0); // false

// && returns first falsy value or the last value
let a = 10 && 0 && 30; // 0
let b = 10 && 20 && 30; // 30
console.log(a, b);

// || returns first truthy value or the last value
a = 0 || 10 || 20; // 10
b = 10 || 20 || 30; // 10
console.log(a, b);

// ?? returns the right side operand when the left one is null or undefined
a = 10 ?? 20; // 10
b = null ?? 10; // 10
console.log(a, b)

// ternary operator
const age = 13;
age >= 18 ? console.log('You can vote') : console.log('You can not vote');
const canVote = age >= 18 ? true : false;
console.log(canVote);