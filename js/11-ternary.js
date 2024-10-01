console.clear();
/*
TERNARY

klausimas ? teigiama reikšme : neigiama reiksme; 
*/

const leidimas = 10 >= 18 ? 'pilnametos' : 'nepilnametis'; // ternary turi buti is 3 dalių
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
    