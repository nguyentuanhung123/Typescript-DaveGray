// Index Signature

/**
 * Nếu ta để bên dưới : index: boolean sẽ có lỗi
 * An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type.
 */

// interface TransactionObj {
//     readonly [index: string]: number
// }

interface TransactionObj {
    readonly [index: string]: number // Cho phép truy cập bằng chuỗi
    Pizza: number
    Books: number
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    // Dave: 40 (Có thể sử dụng định nghĩa index signature cho chuỗi)
}

console.log(todaysTransactions.Pizza); // -10
console.log(todaysTransactions['Pizza']); // -10

/**
 * Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'.
 * No index signature with a parameter of type 'string' was found on type 'TransactionObj'.
 */
let prop: string = 'Pizza';
console.log(todaysTransactions[prop]); // -10

/**
 * 
 *  Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'.
 *  No index signature with a parameter of type 'string' was found on type 'TransactionObj'
 */
const todaysNet = (transactions: TransactionObj) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total
}

console.log(todaysNet(todaysTransactions)); // 35

/**
 * Do ta thêm readOny nên nếu ta định thay đổi giá trị của một thuộc tính sẽ có lỗi
 * Index signature in type 'TransactionObj' only permits reading.
 * 
 * Lỗi "Index signature in type 'TransactionObj' only permits reading" 
 * xảy ra khi bạn cố gắng viết vào một thuộc tính của đối tượng qua một index signature, 
 * nhưng kiểu của index signature chỉ cho phép đọc. 
 * Đây là một phần của hệ thống loại của TypeScript, đảm bảo rằng thuộc tính chỉ có thể được đọc và không thể thay đổi 
 * nếu không được định nghĩa rõ ràng.
 */

// todaysTransactions.Pizza = 25;
// todaysTransactions.Ramen = 18

console.log(todaysTransactions['Dave']); // undefined hoặc 40 (định thay đổi, chỉ có thể thêm bên trong object do ta để readonly)

/**
 * Nếu ta để thêm thuộc tính mới
 * todaysTransactions['Hung'] = 300;
 * -> Nó sẽ báo lỗi do ta đang để readOnly
 */




