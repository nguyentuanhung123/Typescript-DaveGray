const echo = <T>(arg: T): T => {
    return arg;
}

console.log(echo('Hello')); // Hello
console.log(echo(0));
console.log(echo(23));
console.log(echo({}));
console.log(echo({name: 'John', age: 30}));
console.log(echo(undefined));
console.log(echo(null));






