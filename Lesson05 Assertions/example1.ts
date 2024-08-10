/**
 * Trong TypeScript, khai báo kiểu được sử dụng để tạo một bí danh kiểu tùy chỉnh. 
 * Câu lệnh type Three = 'hello'; định nghĩa một bí danh kiểu mới có tên Three chỉ có thể có giá trị theo nghĩa đen là 'hello'.
 */

type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific - ít cụ thể
let c = a as Three // more specific - cụ thể hơn

let d = <One>'world'
let e = <string | number>'world'