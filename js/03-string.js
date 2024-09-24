console.clear(); 
/*
STRING - tekstas

iniciavimo budai
- dviguba kabute (")
- vienguba kabute (')
- backtick (`)
*/

const empty = "";
const username = 'Pravardenis';
const nickname = 'Vardenis';

console.log(username);
console.log(empty);
console.log(nickname);

// Vienguba kabute (').
const kabute1 = "Vienguba kabute (').";
console.log(kabute1);

// Dviguba kabute (").
const kabute2 = 'Dviguba kabute (").';
console.log(kabute2);

// Vienguba kabute (') ir Dviguba kabute (").
const kabute12_1 = 'Vienguba kabute (\') ir Dviguba kabute (") kabutes.';
const kabute12_2 = "Vienguba kabute (') ir Dviguba kabute (\") kabutes.";
const kabute12_3 = "Vienguba kabute (\') ir Dviguba kabute (\") kabutes.";
console.log(kabute12_1);
console.log(kabute12_2);
console.log(kabute12_3);

const backslash1 = '\\';
const backslash2 = "\\";    // &amp;amp; (copyright simbolis htmlui?)
console.log(backslash1);
console.log(backslash2);

const user1 = 'Petras';
const user2 = 'Maryte';
const user3 = 'Jonas';
const user4 = 'Ona';

// Sveiki, <vardas>!

const hi1 = 'Sveiki, ' + user1 + '!';
console.log(hi1);

const personName = 'Vardenis';
const personLastName = 'Pavardenis';

// Hi, I am Vardenis Pavardenis and I like you!

const personHi = 'Hi, I am ' + personLastName + ' ' + personLastName + ' and I like you!';
console.log(personHi);

//const yourName = 'Hi, I am Vardenis Pavardenis and I like you!'; // VG
//console.log(yourName);

// Vienguba (') ir dviguba (") kabutes.
const kabute777 = "Vienguba (') ir" + ' dviguba (") kabutes.';
console.log(kabute777);

console.log('-------------------------------------');

const HTML = '<header>\r\n\
    <img class="logo" src="#" alt="Logo">\r\n\
        <nav>\r\n\
            <a href="#">Home</a>\r\n\
            <a href="#">Home</a>\r\n\
            <a href="#">Home</a>\r\n\
        </nav>\r\n\
</header>';
console.log(HTML);

const backtickHTML = `<header>
<img class="logo" src="#" alt="Logo">
    <nav>
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">Home</a>
    </nav>
</header>`;
console.log(backtickHTML);

const vardas = 'John';
const pavarde = 'Macintosh';

// Hi, I am Vardenis Pavardenis and I like you!
const personHi2 = `Hi, I am ${vardas} ${pavarde} and I like you!`;
console.log(personHi2);



