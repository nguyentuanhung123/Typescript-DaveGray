// optional parameters
const addAll = (a: number, b: number, c?: number) => {
    if(typeof c !== 'undefined'){
        return a + b + c;
    }
    return a + b
}

console.log(addAll(2, 3, 2)); // 7
console.log(addAll(2, 3)); // 5

