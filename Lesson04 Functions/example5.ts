// default param value
const sumAll1 = (a: number, b: number, c: number = 2) => {
    return a + b + c
}

const sumAll2 = (a: number = 10, b: number, c: number = 2) => {
    return a + b + c
}

console.log(sumAll1(2, 3)); // 7

console.log(sumAll2(5, 3)); // 10
console.log(sumAll2(undefined, 3)); // 15

