// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'World';
let e = 'World';
const addOrConcat = (a, b, c) => {
    if (c == 'add')
        return a + b;
    return '' + a + b;
};
const myVal = addOrConcat(2, 2, 'concat');
// be careful! TS sees no problem - but a string is returned
const nextVal = addOrConcat(2, 2, 'concat');
//10 as string 
10;
// The Dom
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
nextImg.src;
export {};
