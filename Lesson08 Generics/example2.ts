/**
 * 
 * Cách hoạt động của &&
 * Nếu tất cả các biểu thức đều true: Kết quả là true.
 * Nếu ít nhất một biểu thức là false: Kết quả là false.
 * 
 * typeof arg === 'object':
 * Kiểm tra xem arg có phải là đối tượng hay không. Lưu ý rằng cả đối tượng và mảng đều trả về 'object', vì vậy điều này không đủ để phân biệt chúng.
 * 
 * !Array.isArray(arg):
 * Xác minh rằng arg không phải là mảng. Array.isArray(arg) trả về true nếu arg là mảng, vì vậy !Array.isArray(arg) đảm bảo rằng arg không phải là mảng.
 * 
 * arg !== null:
 * Đảm bảo rằng arg không phải là null. Trong JavaScript, null cũng có kiểu 'object', vì vậy cần loại trừ null.
 * 
 * Biến được truyền vào phải thỏa mãn 3 điều kiện rút ra: Phải có kiểu là object, không phải là một mảng, và không phải là null.
 */
const isObj = <T>(arg: T): boolean => {
    return (
        typeof arg === 'object' && !Array.isArray(arg) && arg !== null
    )
}

console.log(Array.isArray([])); // true, vì [] là mảng
console.log(Array.isArray({})); // false, vì {} là đối tượng

console.log(isObj(true)); // false
console.log(isObj("John")); // false
console.log(isObj([1, 2, 3])); // false
console.log(isObj(undefined)); // false
console.log(isObj({})); // true
console.log(isObj({name: "John"})); // true
console.log(isObj(null)); // false

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    /**
     * Nếu arg là một mảng và mảng đó rỗng (!arg.length), 
     * hàm trả về đối tượng { arg, is: false }.
     */
    if(Array.isArray(arg) && !arg.length) {
        return {
            arg, is: false
        }
    }
    /**
     * Nếu arg là một đối tượng (không phải là mảng và không phải là null) 
     * và đối tượng đó không có thuộc tính nào (!Object.keys(arg as any).length), 
     * hàm trả về đối tượng { arg, is: false }.
     */
    if(isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {
            arg, is: false
        }
    }
    /**
     * Nếu arg không thỏa mãn các điều kiện trên, 
     * hàm trả về đối tượng { arg, is: !!arg }, 
     * trong đó !!arg chuyển đổi arg thành giá trị boolean. 
     * Ví dụ: nếu arg là một giá trị truthy (không phải 0, false, null, undefined, NaN, hoặc chuỗi rỗng), 
     * thì !!arg sẽ là true; ngược lại, nó sẽ là false.
     */
    return { arg, is: !!arg }
}

console.log(isTrue(false));            // { arg: false, is: false }
console.log(isTrue(0));                // { arg: 0, is: false }
console.log(isTrue(true));             // { arg: true, is: true }
console.log(isTrue(1));                // { arg: 1, is: true }
console.log(isTrue('Dave'));           // { arg: 'Dave', is: true }
console.log(isTrue(''));              // { arg: '', is: false }
console.log(isTrue(null));            // { arg: null, is: false }
console.log(isTrue(undefined));       // { arg: undefined, is: false }
console.log(isTrue({}));              // { arg: {}, is: false }
console.log(isTrue({ name: 'Dave' })); // { arg: { name: 'Dave' }, is: true }
console.log(isTrue([]));              // { arg: [], is: false }
console.log(isTrue([1, 2, 3]));       // { arg: [1, 2, 3], is: true }
console.log(isTrue(NaN));             // { arg: NaN, is: false }
console.log(isTrue(-0));              // { arg: -0, is: false }
