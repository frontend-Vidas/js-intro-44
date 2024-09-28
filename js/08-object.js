console.clear();
/*
OBJECT - objektas
array - supaprastintas objektas 
string - supaprastintas array
{
    key1: value1, 
    key2: value2, 
    key3: value3, 
}
*/
//              vardas   amzius vedybinisStatusas
const petras = ['Petras', 99, true];    // name, age, isMarried
const maryte = ['Maryte', 88, false];  

// sveiki, mano vardas Vardas ir man KAZKIEK metu

const s1 = `sveiki, mano vardas ${petras[0]} ir man ${petras[1]} metu`;

const s2 = `sveiki, mano vardas ${maryte[0]} ir man ${maryte[1]} metu`;
console.log(s1);
console.log(s2);

const jonas = {     // objektas
    name: 'Jonas',
    age: 77,
    isMarried: false,
};
const ona = {     // objektas
    name: 'ona',
    age: 66,
    isMarried: true,
};
console.log(jonas);
console.log(jonas['age']);
console.log(jonas['name']);
console.log(jonas['isMarried']);
console.log(ona);

console.log('-----------------------------------------');

const random = {
    tekstas: 'Tekstas',
    skaicius: 777,
    arTiesa: true,
    kitas_variantas: 'mhm...',
    'su tarpu': 'ups...',
};

console.log(random['tekstas']);  //skirtumas tarp marks, kad cia yra tekstas
console.log(random['skaicius']);
console.log(random['arTiesa']);
console.log(random['kitas_variantas']);
console.log(random['su tarpu']);

const marks = [10, 2, 8, 4, 6]; // masyvo pvz.
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);

const pazymiai = {    //objekto pvz.masyvo kaip object geriau nepateikineti
    0: 10,
    1: 2,
    2: 8,
    3: 4,
    4: 6,
};

console.clear();

const student = {
    name: 'Chuck Norris',
    age: Infinity,
    movies: [
        {
            title: 'Walker: Texas ranger',
            year: 1990,
            actors: [
                'Chuck Norris 1',
                'Chuck Norris 2',
            ],
        },
        {
            title: 'Befor me',
            year: -3000,
            actors: [
                'Chuck Norris 3',
                'Chuck Norris 4',
            ],
        },
        {
            title: 'Hell bound',
            year: 2000,
            actors: [
                'Chuck Norris 5',
                'Chuck Norris 6',
            ],
        },
    ]
};

console.log(student['name']);
console.log(student.name);  // supaprastinta sintakse

console.log(student.movies.length);
console.log(student.movies[0]);
console.log(student.movies[0].title);
console.log(student.movies[0].actors);
console.log(student.movies[0].actors[0]);

console.clear();

const auto = {
    marke: 'Audi',
};
console.log(auto);

auto.marke = 'Audine';
console.log(auto);

const skaiciai = [10, 2, 8]; 
console.log(skaiciai);

skaiciai[0] = 1000;
console.log(skaiciai);

auto.kaina = 1000;  // mato kaina, nes katik papildeme objekta informacija
console.log(auto);
console.log(auto.kaina);

auto.color = 'red'; 
console.log(auto); 

auto.color = 'blue'; // kai priskiri, po to gali pasakyti, ne persigalvojau
console.log(auto); 

delete auto.color;


auto.savininkai =[];
console.log(auto); 