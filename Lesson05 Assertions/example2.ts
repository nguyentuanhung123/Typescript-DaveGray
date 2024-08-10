const addToCart = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if(c === 'add') {
        return a + b
    }
    return '' + a + b
}

console.log(addToCart(5, 3, 'add'));    // Output: 8 (number)
console.log(addToCart(5, 3, 'concat')); // Output: '53' (string)

/**
 * Hàm addToCart luốn return về kết quá là string hoặc number nên không thể gán vào biến myVal chỉ có string theo cách thông thường.
 * Phải thêm as để khẳng định rằng ta đảm bảo hàm addToCart với những biến được truyền luôn trả về 1 string
 */
let myVal: string = addToCart(5, 3, 'concat') as string

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addToCart(5, 3, 'concat') as number
