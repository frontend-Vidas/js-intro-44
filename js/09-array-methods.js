console.clear();

const marks = [];
console.log(marks);

marks.push(10); // push prideda iš galo
marks.push(2);
marks.push(8);
console.log(marks);

marks.unshift(9);  // unshift prideda iš priekio 
marks.unshift(8);
marks.unshift(7);
console.log(marks);

marks.shift();     // shift pasalina pati pirma nari
console.log(marks);

marks.pop();      // pop pasalina iš galo
console.log(marks);

console.log(marks[0]);
console.log(marks.at(0));

console.log(marks[3]);
console.log(marks.at(3));

marks.push(5);

console.log('AT -----------------------------------');

const paskutinePozicija = marks.length - 1;
console.log(marks);
console.log(marks[paskutinePozicija]);
console.log(marks.at(paskutinePozicija));
console.log(marks.at(-1));  // Ima kazkelinta nari is galo 
console.log(marks.at(-2));
console.log(marks.at(-3));
console.log(marks.at(-4));

// 0   1  2
// [1, 2, 3]

console.log('INCLUDES -----------------------------------');

console.log(marks);
console.log(2, marks.includes(2));
console.log(2, marks.includes(2));
console.log(3, marks.includes(3));
console.log(5, marks.includes(5));
console.log('labas', marks.includes('labas'));

const masyvasObjektu = [
    {a: 'a'},
    {b: 'b'},
    {c: 'c'},
];
console.log(masyvasObjektu.includes({b: 'b' }));

console.log('INDEXOF ---------------------------------');
marks.push(-1);
console.log(marks);
console.log(marks.indexOf(8));
console.log(marks.indexOf(-1));

console.log('JOIN -----------------------------------');
const visiPazymiai = marks.join();
console.log(visiPazymiai);
console.log(typeof visiPazymiai);

console.log('Reverse ---------------------------------');

const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(skaiciai);
console.log(skaiciai.at(-1));

skaiciai.reverse();
console.log(skaiciai);

console.log('SLICE ---------------------------------');
console.log(skaiciai);
console.log(skaiciai.slice(0));
console.log(skaiciai.slice(1));
console.log(skaiciai.slice(2, 4));

console.log('SPLICE ---------------------------------');
console.log(skaiciai.splice(2, 0, 'X'));
console.log(skaiciai);
