console.log(window.innerHeight, window.innerWidth);

let x = 10;

function run() {
    console.log(window.innerHeight, window.innerWidth);
    console.log(x); // ok x = 10
}

function add() {
    const x = 14;
    const y = 16;
    console.log(x+y); // 30
}

run();
add();
console.log(x); // 10
// console.log(y); not ok

if(true) {
    const a = 1;
    let b = 2;
    var c = 3;
}

// console.log(a);
// console.log(b);
console.log(c); // weird but works (im not a fan)

function first() {
    const a = 100;

    function second() {
        const b = 200;
        console.log(a); // ok
    }

    // console.log(b); // not ok
    second();
}
first();