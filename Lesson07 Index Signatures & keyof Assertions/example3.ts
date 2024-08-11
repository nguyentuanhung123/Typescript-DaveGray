// interface Incomes {
//     // [key: string | number]: number => không hoàn toàn chính xác và sẽ gây lỗi biên dịch. Đặc biệt, index signature trong TypeScript chỉ cho phép một loại chỉ số (chuỗi hoặc số) tại một thời điểm, không phải cả hai loại cùng một lúc.
//     // [key: 'salary']: number => không hợp lệ và sẽ dẫn đến lỗi biên dịch. Cú pháp này không đúng vì index signature không cho phép chỉ định cụ thể một tên thuộc tính như 'salary'.
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
    salary: 5000,
    bonus: 1000,
    sidehustle: 2500
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}