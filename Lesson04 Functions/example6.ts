/**
 * 
 * Không có giá trị khởi tạo: 
 * Khi không chỉ định giá trị khởi tạo, 
 * reduce sẽ bắt đầu với phần tử đầu tiên của mảng như là giá trị khởi tạo của prev,
 *  và curr sẽ là phần tử thứ hai của mảng.
 */

// Rest Parameters
const total = (a:number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

console.log(total(1, 2, 3, 4)); // 10
