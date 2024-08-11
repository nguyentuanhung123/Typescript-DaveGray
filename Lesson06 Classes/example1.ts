/**
 * Dấu chấm than ! sau tên biến cho biết rằng biến secondLang sẽ được khởi tạo sau và không phải undefined tại thời điểm sử dụng. 
 * Đây là cách để thông báo cho TypeScript rằng bạn chịu trách nhiệm đảm bảo giá trị của secondLang sẽ được gán trước khi sử dụng nó. 
 * Tuy nhiên, nếu bạn chắc chắn rằng secondLang sẽ được khởi tạo ngay sau đó, bạn có thể không cần dùng dấu chấm than 
 * và thay vào đó gán giá trị mặc định.
 * 
 * public readonly name: string:
 * public cho phép thuộc tính name có thể được truy cập từ bên ngoài lớp.
 * readonly cho phép thuộc tính name chỉ có thể được gán giá trị trong constructor và không thể thay đổi sau khi đối tượng được khởi tạo.
 * 
 * public music: string:
 * public cho phép thuộc tính music có thể được truy cập từ bên ngoài lớp và có thể thay đổi giá trị của nó.
 * 
 * private age: number:
 * private chỉ cho phép thuộc tính age được truy cập và thay đổi bên trong lớp Coder. Nó không thể được truy cập từ bên ngoài lớp.
 * 
 * protected lang: string:
 * protected cho phép thuộc tính lang được truy cập từ bên trong lớp Coder và từ các lớp kế thừa (subclasses) của Coder, 
 * nhưng không thể được truy cập từ bên ngoài lớp.
 * 
 * Constructor:
 * Bạn đã sử dụng các tham số trong constructor để khai báo và khởi tạo các thuộc tính của lớp. 
 * Tuy nhiên, việc gán lại giá trị cho các thuộc tính trong constructor là không cần thiết nếu bạn đã khai báo chúng trong tham số của constructor.
 */
class Coder {
    secondLang!: string

    constructor(
        public readonly name: string, 
        public music: string, 
        private age: number, 
        protected lang: string = 'TypeScript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}!`
    }
}

// C1
// const Dave = new Coder('Dave', 'Rock', 42, 'TypeScript');
// console.log(Dave); // Coder { name: 'Dave', music: 'Rock', age: 42, lang: 'TypeScript' }

const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave); // Coder { name: 'Dave', music: 'Rock', age: 42, lang: 'TypeScript'}
console.log(Dave.name); // Dave
console.log(Dave.music); // Rock
Dave.secondLang = 'Java';
console.log("Second language: " + Dave.secondLang); // Second language: Java


// console.log(Dave.age); // Error: age is private (Vẫn hợp lệ của JavaScript và hiện trên tab Console)
console.log(Dave.getAge()); // Hello, I'm 42!

// console.log(Dave.lang); // Error: lang is protected (Vẫn hợp lệ của JavaScript và hiện trên tab Console)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class WebDev extends Coder {
    constructor(
        public computer: string, 
        name: string, 
        music: string, 
        age: number
    ) {
        super(name, music, age) // Gọi constructor của lớp cha 'Coder'
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang()); // I write TypeScript
// console.log(Sara.age); // Property 'age' is private and only accessible within class 'Coder'.
// console.log(Sara.lang); // Property 'lang' is protected and only accessible within class 'Coder' and its subclasses.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class PythonDev extends Coder {
    constructor(
        public computer: string, 
        name: string, 
        music: string, 
        age: number
    ) {
        super(name, music, age, 'Python') // Gọi constructor của lớp cha 'Coder'
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Huy = new PythonDev('Mac', 'Huy', 'Lofi', 25);
console.log(Huy.getLang()); // I write Python

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Có thể kế thừa lớp và truy cập thuộc tính protected
class AdvancedCoder extends Coder {
    public getLang(): string {
        return this.lang; // Có thể truy cập 'lang' vì nó là protected
    }
}

const advancedCoder = new AdvancedCoder('Bob', 'Jazz', 28);
console.log(advancedCoder); // AdvancedCoder { name: 'Bob', music: 'Jazz', age: 28, lang: 'TypeScript' }
console.log(advancedCoder.name); // Output: Bob
console.log(advancedCoder.getLang()); // Output: TypeScript
advancedCoder.secondLang = 'Ruby';
console.log(advancedCoder.secondLang); // Output: Ruby

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class LowerCoder extends Coder {
    public expertise: string; // Thêm thuộc tính 'expertise'
    constructor(
        name: string, 
        music: string, 
        age: number,
        lang: string,
        expertise: string // Thêm tham số 'expertise' vào constructor
    ) {
        super(name, music, age, lang); // Gọi constructor của lớp cha 'Coder'
        this.expertise = expertise; // Khởi tạo thuộc tính 'expertise'
    }

    public getLang(): string {
        return this.lang; // Có thể truy cập 'lang' vì nó là protected
    }

    public getDetails(): string {
        return `Name: ${this.name}, Music: ${this.music}, Age: ${this.getAge()}, Lang: ${this.lang}, Expertise: ${this.expertise}`;
    }
}

// Tạo đối tượng của lớp 'AdvancedCoder'
const lowerCoder = new LowerCoder('Bob', 'Jazz', 28, 'JavaScript', 'AI and Machine Learning');

console.log(lowerCoder.getLang()); // Output: JavaScript
console.log(lowerCoder.getDetails()); // Output: Name: Bob, Music: Jazz, Age: Hello, I'm 28!, Lang: JavaScript, SecondLang: Ruby, Expertise: AI and Machine Learning









