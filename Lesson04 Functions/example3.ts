// functions

const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message);
} 

console.log('Hello!'); // Hello!
console.log(add(2, 3)); // 5

let substract = function (c: number, d: number): number {
    return c - d    
}

type mathFucntion = (a: number, b: number) => number;

// interface mathFucntion {
//     (a: number, b: number): number;
// }

let multiply: mathFucntion = function (c, d) {
    return c * d
}

console.log(multiply(2, 3)); // 6



