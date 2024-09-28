console.clear();

/* 
TYPEOF - operatorius duomens tipo nusatymui
*/

const a = typeof 5;
console.log(a);

const b = typeof '';
console.log(b);

const c = typeof true;
console.log(c);

function sum(a, b) {
    return a + b;
}

const d = typeof sum;
console.log(d);

const e = typeof [];
console.log(e);

const f = typeof typeof 5;
console.log(f);

function example() {
    return false;
}
console.log('>>>', typeof example());

function pasisveikinti(name, age) {}

pasisveikinti('Jonas', 99);
pasisveikinti(99, 'Jonas');
