let stringArr = ['one', 'hey', 'Alok'];
let guiters = ['Strat', 'Les Paul', 5051];
let mixData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guiters[0] = 1998;
guiters.unshift('Jim');
let test = [];
let bands = [];
bands.push('Van Halen');
// tuple
let myTuple = ['Alok', 28, true];
let mixed = ['John', 1, false];
myTuple[1] = 28;
//object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'alok',
    prop2: true
};
exampleObj.prop1 = 'John';
let evh = {
    name: 'Eddie',
    active: false,
    album: [1984, 5150, 'OU812']
};
let jp = {
    active: true,
    album: ['I', 'II', 'IV']
};
const greetGuiterist = (guiterist) => {
    if (guiterist.name) {
        return `${guiterist.name.toUpperCase}`;
    }
    return `Hello!`;
};
console.log(greetGuiterist(jp));
// Enums
// "Unlike most typescript features, Enums are not a 
//  type-lavel addition to JavaScript
//  but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
export {};
