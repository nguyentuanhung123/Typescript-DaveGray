interface HasID {
    id: number
}

/**
 * Error: A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value. ?
 * Lỗi này xảy ra khi bạn khai báo một hàm trong TypeScript mà kiểu trả về của hàm không phải là undefined, void, hoặc any, 
 * nhưng hàm không đảm bảo trả về giá trị ở tất cả các nhánh của nó.
 * 
 * Cụ thể, khi một hàm có kiểu trả về xác định (như number, string, hoặc các kiểu dữ liệu khác), 
 * TypeScript yêu cầu rằng mọi đường dẫn trong hàm đều phải trả về một giá trị thuộc kiểu đó. 
 * Nếu không, TypeScript sẽ báo lỗi để đảm bảo rằng bạn không quên trả về giá trị trong một số trường hợp.
 * 
 * Đối tượng được truyền vào bắt buộc phải có thêm id khi ta để extends HasID
 * 
 */

const processUser = <T extends HasID>(user: T): T => {
    // process the user with logic here
    return user;
}

console.log(processUser({ id: 1, name: 'Dave' }));

/**
 * Error: Object literal may only specify known properties, and 'name' does not exist in type 'HasID'.
 * Lỗi này trong TypeScript xuất hiện khi bạn cố gắng gán một đối tượng literal (đối tượng khai báo trực tiếp) với một kiểu dữ liệu 
 * nhưng đối tượng đó chứa các thuộc tính không có trong kiểu dữ liệu đã định nghĩa.
 */
// console.log(processUser({ name: 'Dave' }));
