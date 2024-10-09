console.clear();

function numberLength(number) {
if (typeof number !== 'number' || !isFinite(number)) {
    return 'Pateikta netinkamo tipo reiksme';
}

    // number = Math.abs(number);
   // number = number < 0 ? -number : number;

    const numberAsString = '' + number;
    let count = numberAsString.length;
    
    if (number % 1 !== 0) {
        count--;
    }
    if (number < 0) {
        count--;
    }
    // const numberAsString = number.toString();
    return count;
}

console.log(numberLength(true)); // klaida, nera ne skaicius
console.log(numberLength('asd')); //nera ne skacius
console.log(numberLength('NaN')); // kaip skaicius, bet neturi skaitmenu
console.log(numberLength([]));
console.log(numberLength({}));
console.log(numberLength(undefined));
console.log(numberLength(null));
console.log(numberLength(numberLength));
console.log(numberLength(Infinity));
console.log(numberLength(-Infinity));

console.log(numberLength(5), '->', 1 );
console.log(numberLength(781), '->', 3 );
console.log(numberLength(54879531452), '->', 11 );
console.log(numberLength(3.14), '->', 3 );
console.log(numberLength(-3.14), '->', 3 );

console.log(numberLength(-5), '->', 1 );
console.log(numberLength(-781), '->', 3 );
console.log(numberLength(-54879531452), '->', 11 );
console.log(numberLength(-3.14), '->', 3 );
console.log(numberLength(-3.14), '->', 3 );






