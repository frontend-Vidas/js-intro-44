console.clear();

function sum(a, b) {
    console.log('>>>', a, b);
return a + b;
}

const s1 = sum(2, 2); 
console.log(s1);

const s2 = sum(7, 5); 
console.log(s2);

function hi(name) {
    console.log(name);
return `Hi, my name is ${name}!`;
}

// Hi, my name is Petras!
// Hi, my name is Maryte!
// Hi, my name is John!
// Hi, my name is Ona!

console.log(hi('Petras'));
console.log(hi('Maryte'));
console.log(hi('John'));
console.log(hi('Ona'));

console.log('-------------------------------------------------');

// Sveiki, as Petras ir man 16 metu.
// Sveiki, as Marytė ir man 18 metu

function prisistatymas(name, age) {
    
    return `Sveiki, as ${name} ir man ${age} metu.`;
}

console.log(prisistatymas('Petras', 16));
console.log(prisistatymas('Maryte', 26));


// export function hello() {
//     return 'Goodbye, Mars!';
//   }
  