/**
 * Lỗi "Function lacks ending return statement and return type does not include 'undefined'" 
 * thường xảy ra trong TypeScript khi hàm có thể không trả về giá trị trong tất cả các trường hợp, 
 * hoặc kiểu trả về của hàm không được chỉ định rõ ràng.
 */

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1;
    while (true) {
        i++
        // if (i> 100) break
    }
}

// custom type guard
const isNumber = (value: any) => {
    return typeof value === 'number'
        ? true : false
}

/**
 * 
 * Đoạn mã bạn cung cấp định nghĩa một hàm numberOrString nhận vào một giá trị có thể là string hoặc number 
 * và trả về một chuỗi mô tả kiểu của giá trị đó. Tuy nhiên, hàm của bạn có thể gặp lỗi do thiếu một giá trị trả về trong một số trường hợp, 
 * cụ thể là khi giá trị không phải là string hoặc number.
 * 
 * Xử lý trường hợp không mong muốn:
 * throw new Error('Invalid value type'): 
 * Đoạn mã này đảm bảo rằng hàm luôn trả về một giá trị hợp lệ 
 * hoặc ném một lỗi nếu giá trị không khớp với kiểu đã cho. 
 * Điều này giúp bảo vệ hàm khỏi các tình huống không mong muốn và đảm bảo rằng hàm không trả về undefined.
 */

// use of the never type
const numberOrString = (value: string | number): string => {
    if(typeof value === 'string') {
        return 'string'
    } 
    // if (typeof value === 'number') {
    //     return 'number'
    // }
    if (isNumber(value)) {
        return 'number'
    }

    // Đảm bảo rằng hàm luôn trả về một giá trị hợp lệ
    // C1: throw new Error('Invalid value type');
    // C2: return 'unknown';
    return createError('This should never happen!')
}

console.log(numberOrString('hello')); // string




