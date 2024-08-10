class Peeps {
    static count: number = 0 // // Khai báo thuộc tính tĩnh 'count'

    // Khai báo phương thức tĩnh 'getCount'
    static getCount(): number {
        return Peeps.count // Truy cập thuộc tính tĩnh 'count' từ phương thức tĩnh
    }

    public id: number
    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Amy.id); // 3
console.log(Steve.id); // 2
console.log(John.id); // 1

console.log(Peeps.count); // 3
