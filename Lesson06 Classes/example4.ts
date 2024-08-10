class Bands {
    /**
     * Đây là một thuộc tính private của lớp Bands, lưu trữ dữ liệu ở dạng mảng các chuỗi (string[]). 
     * Nó chỉ có thể được truy cập từ bên trong lớp Bands.
     */
    private dataState: string[]

    /**
     * constructor() khởi tạo thuộc tính dataState với một mảng rỗng.
     */
    constructor() {
        this.dataState = []
    }

    /**
     * public get data(): string[] cho phép bạn truy cập giá trị của dataState từ bên ngoài lớp. 
     * Getter trả về giá trị của thuộc tính dataState.
     */
    public get data(): string[] {
        return this.dataState
    }

    /**
     * public set data(value: string[]) cho phép bạn thiết lập giá trị của dataState từ bên ngoài lớp. 
     * Setter kiểm tra xem value có phải là một mảng các chuỗi hay không. Nếu đúng, nó gán giá trị cho dataState; 
     * nếu không, nó ném một lỗi.
     */
    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(item => typeof item === 'string')) {
            this.dataState = value
            return;
            // return this.dataState = value // Error: Setters cannot return a value
        } else {
            throw new Error('Param is not an array of strings')
        }
    }
}

const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zeppelin', 'Pink Floyd'];
console.log(MyBands.data); // [ 'Neil Young', 'Led Zeppelin', 'Pink Floyd' ]
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data); // [ 'Neil Young', 'Led Zeppelin', 'Pink Floyd', 'ZZ Top' ]
MyBands.data = ['Van Halen'];
console.log(MyBands.data); // [ 'Van Halen' ]

