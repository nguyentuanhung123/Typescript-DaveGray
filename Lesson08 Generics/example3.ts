interface BoolCheck<T> {
    value: T
    is: boolean
}

/**
 * 
 * Function lacks ending return statement and return type does not include 'undefined'.
 * 
 * Function lacks ending return statement":
 * Lỗi này xảy ra khi TypeScript nhận thấy rằng có một nhánh trong hàm mà không trả về giá trị. 
 * Điều này có thể xảy ra nếu bạn có một điều kiện hoặc nhánh mã mà không có return.
 * 
 * Return type does not include 'undefined'":
 * Điều này xảy ra khi TypeScript xác định rằng hàm có thể trả về undefined, nhưng kiểu trả về của hàm không bao gồm undefined.
 *  
 */

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if(Array.isArray(arg) && !arg.length) {
        return {
            value: arg, 
            is: false
        }
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {
            value: arg, 
            is: false
        }
    }
    return {
        value: arg, 
        is: !!arg
    }
}