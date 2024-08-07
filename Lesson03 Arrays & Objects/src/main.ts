let stringArray = ['one', 'hey', 'Hung'];

let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true];

stringArray[0] = 'John';
stringArray.push('Nguyen');
console.log(stringArray); //  ['John', 'hey', 'Hung', 'Nguyen']

guitars[0] = 1984;
guitars.unshift('Jim');
console.log(guitars); // ['Strat', 'Les Paul', 'SG', 'Telecaster']

let test = []
let bands: string[] = []
bands.push('Van Halen')
console.log(bands);

// Tuple
let myTuple: [string, number, boolean] = ['Hung', 22, true]

let mixed = ['John', 1, false]

// mixed = myTuple -> No Problem
// myTuple = mixed -> Have Problem

myTuple[1] = 42

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj); // object
myObj = bands;
myObj = {}

const exampleObj = {
    prop1: 'Dave',
    prop2: true
}

exampleObj.prop1 = 'Hung';
exampleObj

// Type

interface Guitarist {
    name?: string,
    active: boolean, // optional
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Dave',
    active: true,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: 'JimmY',
    active: true,
    albums: ['I', 'II', 'IV']
}

// evh = jp

const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`
    }
    return 'Hello';
}

console.log(greetGuitarist(jp));

// Enums
// "Unlike most Typescript features, Enums are not a type-level addition to Typescript. They are a feature of the language runtime."

enum Grade {
    U = 2,
    D,
    C,
    B,
    A
}

console.log(Grade.U); // 0








