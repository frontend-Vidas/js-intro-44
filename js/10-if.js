console.clear();
/*
IF  - palyginimas

Palyginimo operatoriai:
visi: >,<, >=, <=, ==, ===, !=, !==,
naudotini: >,<, >=, <=, ==, ===, !==
nenaudotini: ==, !=

Loginiai operatoriai:
&& (and), || (or), ! (not)

Kodo sablonai: 
if () {}
if () {} eslse {}
if () {} eslse if () {}
if () {} eslse if () {} ... else if () {}
if () {} eslse if () {} ... else if () {} else {}
*/

if (4 > 2) {
    console.log('taip');
};

if (7 < 10) {
    console.log('7 < 10');
} else {
    console.log('7 ne < uz 10');
}
const userAge = 10;
const ageLimit = 18;

if(userAge >= ageLimit) {
    console.log('uzeik...😎');
} else {
    console.log(`dar palauk ${ageLimit - userAge} metu...`);
}

console.log('-----------------------------');
const diena = 3;

if (diena === 1) {              // sitas butu saugiausias kodas
    console.log('pirmadienis');
} else if (diena === 2) {
    console.log('antradienis');
} else {
    console.log('treciadienis');
}

console.log('-----------------------------');

// kodo nestinimas, tagas tage, vaikiniai elementai

const arSvieciaSaule = true;
const arLija = false;

let kaDaryti = 'nezinau';

if (arSvieciaSaule) {
    kaDaryti = 'eisim i kiema';
    if (arLija) {
        kaDaryti = 'ziurim i vaivorykste';
    }else {
        kaDaryti = 'deginames pleze';
    }
} else {
    kaDaryti = 'kodinsime';
}
console.log(kaDaryti);

console.log('-----------------------------');

const day = 2;

if (day === 1) {
    console.log('pirm');
} else {
    console.log('nieko nesakau');
}

console.log('-----------------------------');

const dd = 1;
let kokiaDiena = 'nezinau..';

if (dd === 1) {
    kokiaDiena = 'pirmadienis';
}
console.log(kokiaDiena);

const siandien = 3.14;

function kokiaSavaitesDiena(dienosNr) {
    const dienuPavadinimai = [
        'Pirm',
        'Antr',
        'Trec',
        'Ketv',
        'Penk',
        'Sest',
        'Sekm',
    ];

    const savaitesDiena = dienuPavadinimai[dienosNr -1];

    if (savaitesDiena === undefined) {
        return 'tokios dienos nera';
    } else {
        return savaitesDiena;
    }
}

console.log(kokiaSavaitesDiena(siandien));

console.log('-----------------------------');

if (777 !== 777) {
    console.log('nelygu');
} else {
    console.log('lygu');
}

console.clear();

// LOGINIAI OPRATORIAI:
if (4 > 2) {
    if (8 < 20) {
        console.log('>>> and');
    }
}

if (4 > 2 && 8 < 20) {  // abu klausimus turiu tenkinti, kad suveiktu apatine eilute
    console.log('>>>and');
}

if (1 < 0 || 2 < 4) {
    console.log('>>> arba');
}

if (1 === 1 && 2 === 3) {
    console.log('mix');
}

console.log('-----------------------------');

const a = true;

if (!a) {
    console.log('taip');
} else {
    console.log('ir ne');
}

console.log('-----------------------------');

// visi skaiciai - TRUE, iskyrus 0 it NaN
// undefined  - FALSE
// null - FALSE
// visi string – TRUE, isskyrus tuscias
// visos function - TRUE
// visi array - TRUE
// visi object - TRUE

function empty() {}

const nameInputValue = 'abshsj';

if (!nameInputValue) {
    console.log('KAZKAS');
}else {
    console.log('Ne Kazka...');
}

const negative = !!nameInputValue;
console.log(negative);