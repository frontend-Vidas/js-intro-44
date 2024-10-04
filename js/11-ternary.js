console.clear();
/*
TERNARY

klausimas ? teigiama reikšme : neigiama reiksme; 
*/

const leidimas = 10 >= 18 ? 'pilnametis' : 'nepilnametis'; // ternary turi buti is 3 dalių
console.log(leidimas);

let approve = '';

if (10 >= 18) {
    approve = 'pilnametis';
} else {
    approve = 'nepilnametis';
}
console.log(approve);

const a = 1 ? 2 : 3;
console.log(a);

// jeigu true -> [1], false - [2]
const masyvas = [];
    
if (true) {
    masyvas.push(1);
} else {
    masyvas.push(2);
}

const mas = true ? [1] : [2]; // kitas paprastas pvz