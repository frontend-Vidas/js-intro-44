console.clear();
/*
NUMBERS
normalus:
-sveikieji
-desimtainiai

mistiniai:
-infinity/-infinity
- NaN (not-a-bžnumber)

MATEMATINIAI VEIKSMAI
artitmetiniai operatoriai
+, -, /, *, ** (laipsnis), % (liekana)
priskirimo operatoriai:
=, +=, -=, /=, *=, **=, %=


KINTAMUJU INICIAVIMO BUDAI
- const (default)
- let (jei kinta reiksme)
- var (nenaudoti)
*/
//sveikasis skaičius
console.log(123456789);
console.log(-123456789);

//desimtainis
console.log(3.1415);
console.log(-3.1415);

// begalybes
console.log(Infinity); // js-e
// console.log(Infinite); // css-se

//NaN
console.log(NaN);

//VEIKSMAI
console.log(2 * 2, 2 ** 2); // 2 pakelta 2-ju laipsniu

const a = 7;
console.log(a);

const PI = 3.14;
console.log(PI);

console.log('------------------------');
// pazymiai: 10, 2, 8, 4, 6.

let suma = 0;
console.log(suma);

suma = suma + 10;
console.log(suma);

suma = suma +2;
console.log(suma);

console.log('--------------------------');

let suma2 = 0;
console.log(suma2);

// suma2 = suma2 + 10;

suma2 += 10;
console.log(suma2);

suma2 += 2;
console.log(suma2);

suma2 += 8;
console.log(suma2);

suma2 += 4;
console.log(suma2);

console.log('------------------------------');

let suma3 = 0;
console.log(suma3);

suma3 += 10;
console.log(suma3);

suma3 *= 5;
console.log(suma3);

suma3 -= 1;
console.log(suma3);

suma3 /= 7;
console.log(suma3);

suma3 **= 3;
console.log(suma3, 7 * 7 * 7);

console.log('------------------------------');

const skaicius = 81;
const daliklis = 10;
const dalmuo = skaicius / daliklis;
console.log(skaicius, '/', daliklis, '=', dalmuo);

const liekana = skaicius % daliklis;
console.log(liekana);

let liek = 144;

liek %= 100;
console.log(liek);

liek %= 15;
console.log(liek);

liek %= 5;
console.log(liek);

console.clear();

let i = 0;
console.log(i);

i = i + 1;
console.log(i);

i = i + 1;
console.log(i);

i++;
console.log(i);

++i;
console.log(i);

let m = 0;
console.log(m);

m = m - 1;
console.log(m);

m -= 1;
console.log(m);

m --;
console.log(m);

--m;
console.log(m);

console.clear();

let n = 0;

console.log(n);
console.log(n++);
console.log(n);
