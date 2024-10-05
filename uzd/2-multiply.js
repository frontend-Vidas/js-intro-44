console.clear();

function multiply (a, b) {
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras ne skacius';
    }

    // |5| = 5  skaciaus absoliutine reiksme
    // |-5| = 5

     if (!isFinite(a)) {
        return 'ERROR: pirmas parametras turi buti tikras skaičiius';
     }
    
    if (isNaN(a)) {
        return 'ERROR: antras parametras turi buti skacius';
    }
    if (typeof b !== 'number') {
        return 'ERROR: antras parametras ne skacius';
    }
    if (b === Infinity) {
        return 'ERROR: antras parametras negali buti Infinity';
    }

    if ('' + b === 'NaN') {
        return 'ERROR: antras parametras negali buti NaN';
    }

    const result = a * b;

    return result;
}
// o cia yra Ok
console.log(multiply(7, 5));
console.log(multiply(-7, 5));
console.log(multiply(-7, -5));

// tipai
console.log(multiply('labas', 5));

// ne skaiciai
console.log(multiply(5, Infinity));

// ne tipai
console.log(multiply([], 1));
console.log(multiply([], []));

console.log(multiply(5, NaN));
console.log(multiply(NaN, NaN));

console.log(multiply(multiply, multiply)); 
console.log(multiply(2, multiply)); 
console.log(multiply(2, 0)); // daugybos atveju puikiai veikia, dalybos ne!


