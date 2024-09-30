for(let i = 0; i < 5; i++) {
    console.log(i);
}

const names = ['John', 'Matt', 'Jake', 'Tom'];
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

let i = 0;
while(i < names.length){
    console.log(names[i])
    i++;
}

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

const items = ['book', 'table', 'chair', 'kite'];
for(const item of items){
    console.log(item);
}

let s = 'testString';
for(const char of s){
    console.log(char);
}

const colorObject = {
    c1: 'red',
    c2: 'green',
    c3: 'yellow',
    c4: 'blue',
};
for(const key in colorObject){
    console.log(key,colorObject[key]);
}