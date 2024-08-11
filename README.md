## Tải Typescript trong thư mục Dave Gray

- npm i -g typescript
- npm i -g ts-node

## Chạy file ts để tạo file js

-  tsc main.ts

## Sửa lỗi : Cứ mỗi lần thay đổi file ts thì phải chạy lại lệnh  tsc main.ts -w nên ta phải sửa lại là

-  tsc main.ts -w

## Giải thích đoạn code 

```html
<script src="main.js" defer></script>
```

- defer: Thuộc tính defer giúp trì hoãn việc thực thi tệp JavaScript cho đến khi toàn bộ nội dung của trang (HTML) đã được phân tích xong. Đây là cách giúp đảm bảo rằng mã JavaScript không làm chậm quá trình tải trang. defer cũng đảm bảo rằng các tệp JavaScript sẽ được thực thi theo thứ tự mà chúng xuất hiện trong tài liệu.

## Lợi ích của defer

- Tăng tốc độ tải trang: Vì JavaScript không ngăn cản việc tải và phân tích HTML, trang có thể được hiển thị nhanh hơn.
- Chạy JavaScript sau khi DOM đã sẵn sàng: Mã JavaScript sẽ không được thực thi cho đến khi DOM đã hoàn tất việc tải, giúp giảm thiểu các lỗi liên quan đến việc tương tác với các phần tử HTML chưa được tải.

## Run code

- Go Live

## Set up project
- B1: Tạo folder build và src
- B2: Chuyển file .html vào folder build
- B3: Chuyển file .ts vào folder src
- B4: Tạo config file ts bằng câu lệnh tsc --init
- B5: Bỏ comment trong tsconfig.json

- Ban đầu

```ts
// "rootDir": "./",                                  /* Specify the root folder within your source files. */

// "outDir": "./",                                   /* Specify an output folder for all emitted files. */
```

- Lúc sau: Do ta đặt file ts trong folder src nên phải sửa

```ts
"rootDir": "./src",                                  /* Specify the root folder within your source files. */

"outDir": "./build/js",                                   /* Specify an output folder for all emitted files. */
```

- B6: Chạy tsc -w 

- Lệnh tsc -w là lệnh sử dụng TypeScript Compiler (tsc) để chạy TypeScript trong chế độ watch (theo dõi). Đây là cách để TypeScript tự động biên dịch lại các tệp nguồn khi có sự thay đổi.

## Giải thích:
- tsc: Đây là lệnh để chạy TypeScript Compiler (trình biên dịch TypeScript).
- -w hoặc --watch: Cờ này bật chế độ theo dõi. Khi chế độ này được bật, tsc sẽ tiếp tục chạy và theo dõi các tệp TypeScript trong dự án. Nếu bạn thay đổi bất kỳ tệp TypeScript nào, trình biên dịch sẽ tự động biên dịch lại các tệp đó mà không cần phải chạy lại lệnh tsc.

## Kết quả sau khi set up như trên: Sau khi ta tạo 1 file như test.ts trong src thì nó sẽ tự động tạo file test.js trong thư mục js mà ta không cần phải gõ thêm gì

## Một số vấn đề cần lưu ý:

- Nếu ta xóa 1 file .ts trong folder src thì nó sẽ không tự động xóa file .js tương ứng với nó nên ta phải tự xóa file đó trong folder js
- Khi ta tạo 1 file như root.ts trong thư mục gốc (Lesson1) thì nó sẽ tự động sinh ra file root.js cùng cấp với nó (cùng nằm trong thư mục gốc), ta muốn ignore nó để không phải tạo thêm file .js bằng cách bổ sung include trong file tsconfig.json:

```ts
{
    "compilerOptions": {...}
    "include": [
        "src"
    ]
}
```

### Sửa lại đường dẫn trong file html

```html
<script src="js/main.js" defer></script>
```

### Nếu ta không muốn file .ts biên dịch và tạo ra file .js nếu trong file .ts đang có lỗi thì ta phải xóa 1 comment trong tsconfig.ts

```ts
"noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
```

### Nếu ta không xóa commet như phía trên mà nếu muốn chạy vẫn có hiệu quả như trên thì ta chạy lệnh

- tsc --noEmitOnError -w

### Kết luận : Chạy bằng lệnh tsc -w

## Giải thích về unshift

```js
let guitars = ['Les Paul', 'SG', 'Telecaster'];
guitars.unshift('Strat');
```

- .unshift('Strat'): Phương thức unshift thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng.
- Mảng guitars sẽ được cập nhật thành: 

```js
['Strat', 'Les Paul', 'SG', 'Telecaster']
```

## Khi nào nên sử dụng Type và khi nào dùng interface

- Trong TypeScript, cả type và interface đều được sử dụng để định nghĩa kiểu dữ liệu, nhưng chúng có một số khác biệt và trường hợp sử dụng khác nhau. Dưới đây là hướng dẫn chi tiết về khi nào nên sử dụng type và khi nào nên sử dụng interface.

## Sử dụng interface

- interface thường được sử dụng khi bạn muốn định nghĩa cấu trúc của đối tượng hoặc các lớp (classes). Một số điểm đặc trưng của interface là:

+ Kế thừa (Inheritance): interface có khả năng kế thừa từ nhiều interface khác. Điều này có thể giúp bạn tạo ra các kiểu dữ liệu phức tạp từ các kiểu dữ liệu cơ bản.

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: string;
}
```

+ Mở rộng: interface có thể được mở rộng và bổ sung thêm thuộc tính hoặc phương thức ở các phần định nghĩa khác nhau. Điều này rất hữu ích khi làm việc với các thư viện bên ngoài hoặc khi bạn cần mở rộng các kiểu hiện có.


```ts
interface Car {
  brand: string;
}

interface Car {
  model: string;
}

const myCar: Car = {
  brand: 'Toyota',
  model: 'Corolla',
};
```

+ Hỗ trợ lớp (classes): interface có thể được áp dụng để định nghĩa cấu trúc của lớp và đảm bảo rằng lớp tuân theo một hợp đồng cụ thể.

```ts
interface Shape {
  getArea(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  getArea() {
    return this.width * this.height;
  }
}
```

## Sử dụng type

- type thường được sử dụng khi bạn cần định nghĩa kiểu dữ liệu phức tạp hoặc các kiểu dữ liệu không thể được biểu diễn bằng interface. Một số điểm đặc trưng của type là:

+ Union và Intersection Types: type cho phép bạn tạo các kiểu dữ liệu kết hợp (union types) và giao nhau (intersection types), điều này giúp bạn định nghĩa các kiểu dữ liệu phức tạp hơn.

```ts
type NumberOrString = number | string;
type Point = { x: number } & { y: number };
```

+ Tuples và Literal Types: type hỗ trợ các kiểu dữ liệu như tuple và literal types, điều này giúp bạn định nghĩa các cấu trúc dữ liệu cụ thể hơn.

```ts
type RGB = [number, number, number];
type Direction = 'left' | 'right' | 'up' | 'down';
```

+ Không thể mở rộng: Các định nghĩa kiểu type không thể được mở rộng sau khi đã được định nghĩa, trái ngược với interface.

```ts
type User = {
  name: string;
  age: number;
};

// Không thể mở rộng kiểu `User` ở phần định nghĩa khác
```

### Khi nào nên sử dụng cái nào?

- Sử dụng interface nếu bạn đang định nghĩa cấu trúc cho các đối tượng, lớp, hoặc khi bạn cần khả năng mở rộng và kế thừa. interface cũng rất phù hợp khi bạn làm việc với các thư viện hoặc mã nguồn bên ngoài mà có thể cần mở rộng.
- Sử dụng type khi bạn cần các kiểu dữ liệu phức tạp hơn như union types, intersection types, hoặc các kiểu dữ liệu cụ thể như tuples. type cũng là lựa chọn tốt khi bạn không cần khả năng mở rộng sau khi định nghĩa.

# Tổng kết

- Cả type và interface đều rất mạnh mẽ và có thể được sử dụng trong nhiều tình huống khác nhau. Trong nhiều trường hợp, bạn có thể chọn cái nào tùy theo sở thích hoặc yêu cầu cụ thể của dự án.

## Lưu ý nhỏ ở chương 3, nếu phải làm việc với 1 biên optional thì ta phải thêm dấu ? trong nơi mà ta sẽ có lỗi nếu làm không cẩn thận

```ts
interface Guitarist {
    name?: string,
    active: boolean, // optional
    albums: (string | number)[]
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name.toUpperCase()}` // Lỗi 'guitarist.name' is possibly 'undefined'. (name có thể không xác định)
}

console.log(greetGuitarist(jp));
```

- Sửa lại: 

- C1: Thêm dấu ?

```ts
const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name?.toUpperCase()}`
}
```

- C2

```ts
const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`
    }
    return 'Hello';
}
```

## Enums
- "Unlike most Typescript features, Enums are not a type-level addition to Typescript. They are a feature of the language runtime."

- Khi ta thay một biến Enums bằng một sô bất ký như 1 thì những cái sau cũng tăng lên 1 đơn vị theo thứ tự ma không cần phải ghi rõ từng cái

- Ví dụ ban đầu

```ts
enum Grade {
    U,
    D,
    C,
    B,
    A
}

console.log(Grade.U); // 0
console.log(Grade.D); // 1
console.log(Grade.C); // 2
console.log(Grade.B); // 3
console.log(Grade.A); // 4
```

- Sau khi sửa theo giải thích

```ts
enum Grade {
    U = 2,
    D,
    C,
    B,
    A
}
console.log(Grade.U); // 2
console.log(Grade.D); // 3
console.log(Grade.C); // 4
console.log(Grade.B); // 5
console.log(Grade.A); // 6
```

### Lưu ý nhỏ : Nếu biến nào được thêm optional thì biến đó ngoài kiểu mặc định sẽ có thêm 1 kiểu là undifined

- Ví dụ : c?: number => c: number | undefined

- 'c' is possibly 'undefined'


```ts
const addAll = (a: number, b: number, c?: number) => {
  // return a + b + c; // error
  if(typeof c !== 'undefined'){
    return a + b + c;
  }
}
```

## Trong TypeScript, assertion là một cơ chế cho phép bạn "bảo đảm" cho TypeScript biết rằng một giá trị có kiểu cụ thể mà bạn biết chắc chắn. Điều này thường được sử dụng khi bạn cần phải chỉ định kiểu của giá trị mà TypeScript không thể suy luận một cách chính xác. Dưới đây là các loại assertion trong TypeScript và cách sử dụng chúng.

1. Type Assertion
- Type assertion cho phép bạn nói với TypeScript về kiểu của giá trị mà bạn biết chắc chắn. Có hai cú pháp để thực hiện type assertion:

- Cú pháp 1: as
```ts
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
```

- Cú pháp 2: <>
```ts
let someValue: any = "This is a string";
let strLength: number = (<string>someValue).length;
```

- as là cú pháp được khuyến khích trong các dự án TypeScript, đặc biệt là trong các dự án sử dụng React (do sự tương thích với JSX).
- <> là cú pháp cũ và có thể không hoạt động khi bạn sử dụng JSX.

2. Non-null Assertion Operator

- Khi bạn chắc chắn rằng một giá trị không phải là null hoặc undefined, bạn có thể sử dụng toán tử ! để thông báo với TypeScript.

```ts
let myValue: string | undefined = "Hello";
let length: number = myValue!.length; // TypeScript không báo lỗi, vì bạn đảm bảo myValue không phải undefined
```

3. Assertions in Function Parameters
- Đôi khi bạn cần chắc chắn rằng tham số trong hàm có một kiểu cụ thể, bạn có thể sử dụng assertions.

```ts
function processValue(value: unknown) {
    if (typeof value === 'string') {
        console.log((value as string).toUpperCase()); // Assertions để TypeScript biết value là string
    }
}
```

4. Type Assertions with DOM
- Type assertions thường được sử dụng khi làm việc với các phần tử DOM, đặc biệt là khi bạn biết kiểu của phần tử.

```ts
let inputElement = document.querySelector('input') as HTMLInputElement;
inputElement.value = "Hello, TypeScript!";
```

### Khi nào nên sử dụng assertions
- Khi bạn chắc chắn về kiểu dữ liệu: Assertions nên được sử dụng khi bạn chắc chắn về kiểu dữ liệu của một biến nhưng TypeScript không suy luận đúng.
- Khi làm việc với dữ liệu không được kiểm tra: Ví dụ, khi nhận dữ liệu từ các API bên ngoài hoặc thư viện không có kiểu rõ ràng.

### Lưu ý khi sử dụng assertions
- Sử dụng cẩn thận: Assertions bỏ qua kiểm tra kiểu của TypeScript, vì vậy nếu bạn không chắc chắn về kiểu, việc sử dụng assertions có thể dẫn đến lỗi runtime.
- Chỉ sử dụng khi cần thiết: Sử dụng assertions khi bạn biết chắc chắn kiểu của giá trị và không có cách nào khác để TypeScript suy luận chính xác kiểu.

```ts
// Type Assertion
let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

// Non-null Assertion
let myValue: string | undefined = "TypeScript";
let length: number = myValue!.length;

// Function Parameter Assertion
function printLength(value: unknown) {
    if (typeof value === 'string') {
        console.log((value as string).length);
    }
}

// DOM Element Assertion
let input = document.querySelector('input') as HTMLInputElement;
input.value = "TypeScript with assertions!";
```

- Việc sử dụng type assertions giúp bạn kiểm soát các kiểu dữ liệu trong TypeScript, nhưng cũng cần phải sử dụng chúng một cách cẩn thận để tránh lỗi không mong muốn trong ứng dụng của bạn.

## Khi bạn sử dụng document.querySelector('img'), TypeScript sẽ xác định kiểu của img là HTMLImageElement | null. Điều này có nghĩa là biến img có thể là một phần tử hình ảnh (HTMLImageElement) hoặc có thể là null nếu không tìm thấy phần tử phù hợp.

```ts
const img = document.querySelector('img');
```

### Xử lý với TypeScript

1. Kiểm tra null:
- Để tránh lỗi khi truy cập thuộc tính hoặc phương thức của img, bạn nên kiểm tra xem img có phải là null hay không trước khi sử dụng nó.

```ts
const img = document.querySelector('img');
if (img !== null) {
  img.src = 'path/to/image.jpg'; // Chỉ thực hiện nếu img không phải là null
}
```

2. Sử dụng as để ép kiểu:
- Nếu bạn chắc chắn rằng querySelector sẽ trả về một phần tử img, bạn có thể ép kiểu trực tiếp. Tuy nhiên, hãy cẩn thận khi làm điều này vì nếu không có phần tử img trong tài liệu, sẽ có lỗi.

```ts
const img = document.querySelector('img') as HTMLImageElement;
img.src = 'path/to/image.jpg';
```

3. Sử dụng hàm getElementById hoặc getElementsByClassName nếu có ID hoặc class cụ thể:
- Nếu bạn biết phần tử có ID hoặc class cụ thể, bạn có thể sử dụng các phương thức như getElementById hoặc getElementsByClassName để chọn phần tử đó. Điều này giúp tránh các vấn đề với việc chọn không chính xác phần tử.

```ts
const img = document.getElementById('myImage') as HTMLImageElement;
img.src = 'path/to/image.jpg';
```

- Nhớ rằng việc kiểm tra và đảm bảo loại dữ liệu là rất quan trọng để tránh lỗi khi làm việc với DOM trong TypeScript.

## Khi sử dụng let thay vì const trong khai báo biến, lý do chính thường liên quan đến việc thay đổi giá trị của biến sau khi nó được khởi tạo.
- Sự khác biệt giữa let và const:
1. let:
- Có thể thay đổi giá trị: Biến khai báo bằng let có thể được gán lại giá trị mới nhiều lần.
- Khả năng cập nhật: Nếu bạn dự đoán rằng giá trị của biến sẽ thay đổi sau khi khởi tạo, bạn nên sử dụng let.

```ts
let year: HTMLElement | null;
year = document.getElementById("year");
// Có thể gán lại year nếu cần
year = document.getElementById("anotherYear");
```

2. const:
- Không thể thay đổi giá trị: Biến khai báo bằng const phải được khởi tạo với một giá trị và không thể gán lại giá trị mới sau đó.
- Không thể thay đổi tham chiếu: Đối với các đối tượng hoặc mảng, const không cho phép thay đổi tham chiếu nhưng có thể thay đổi nội dung bên trong.

```ts
const year: HTMLElement | null = document.getElementById("year");
// Không thể gán lại year sau khi đã khởi tạo
// year = document.getElementById("anotherYear"); // Lỗi: Cannot assign to 'year' because it is a constant
```

## Khi nào dùng let và khi nào dùng const:
- Sử dụng const: Nếu biến không cần thay đổi giá trị sau khi khởi tạo. Điều này giúp bảo vệ giá trị của biến và làm cho mã của bạn dễ đọc hơn, vì bạn sẽ biết rằng giá trị đó không bị thay đổi.
- Sử dụng let: Nếu biến có thể cần được gán lại giá trị khác trong suốt vòng đời của chương trình.

## Ví dụ thực tiễn:
- Nếu bạn đang chọn phần tử DOM và không chắc chắn nếu phần tử đó có thể thay đổi hoặc cần được cập nhật sau đó, việc sử dụng let là hợp lý. Ví dụ:

```ts
let year: HTMLElement | null = document.getElementById("year");
// Có thể thay đổi year nếu cần
year = document.getElementById("anotherYear");
```

- Ngược lại, nếu bạn biết rằng phần tử DOM sẽ không thay đổi và bạn không có kế hoạch thay đổi biến year, sử dụng const là sự lựa chọn tốt hơn.

```ts
const year: HTMLElement | null = document.getElementById("year");
// Không thể thay đổi year sau đó
```

- Lựa chọn giữa let và const phụ thuộc vào cách bạn dự định sử dụng biến trong mã của bạn.

## Khi khai báo một biến bằng const, bạn cần phải khởi tạo giá trị cho nó ngay lập tức. Nếu bạn khai báo một biến const mà không khởi tạo giá trị, bạn sẽ gặp lỗi biên dịch.

- Ví dụ:
1. Khai báo mà không khởi tạo (Sẽ gây lỗi):

```ts
const thisYear: string; // Lỗi: Variable 'thisYear' implicitly has an 'any' type.
```

2. Khai báo và khởi tạo đúng cách:

```ts
const thisYear: string = new Date().getFullYear().toString(); // Đúng
```

## Giải thích:
- const yêu cầu khởi tạo: Khi bạn sử dụng const, bạn phải khởi tạo biến ngay lập tức. Nếu bạn không khởi tạo, TypeScript sẽ báo lỗi vì const không cho phép khai báo biến mà không có giá trị khởi tạo.

- undefined không phải là giá trị mặc định: Nếu bạn khai báo một biến với const mà không khởi tạo giá trị, bạn sẽ nhận được lỗi biên dịch. undefined không được tự động gán cho biến khai báo bằng const.

- Khởi tạo với giá trị: Nếu bạn khai báo biến với const, bạn cần gán giá trị cho nó ngay khi khai báo. Trong trường hợp của thisYear, bạn phải gán nó bằng một giá trị chuỗi hợp lệ.

```ts
const thisYear: string = new Date().getFullYear().toString(); // Khởi tạo ngay lập tức

console.log(thisYear); // Ví dụ: '2024'
```

## Tổng kết:
- Khi sử dụng const, bạn phải khởi tạo giá trị cho biến ngay lập tức. Nếu không khởi tạo, TypeScript sẽ báo lỗi và biến sẽ không có giá trị mặc định là undefined.

## Khởi tạo (initialization) là quá trình gán giá trị ban đầu cho một biến, thuộc tính của đối tượng, hoặc một tham số trong một hàm. Trong lập trình, việc khởi tạo là bước quan trọng để đảm bảo rằng các biến hoặc thuộc tính không chứa giá trị không xác định hoặc ngẫu nhiên khi chúng được sử dụng lần đầu tiên.

- Các khái niệm liên quan đến khởi tạo:

1. Khởi tạo biến:
- Khi bạn khai báo một biến và gán cho nó một giá trị ngay lập tức, bạn đang thực hiện việc khởi tạo biến.

```ts
let age: number = 25; // Khởi tạo biến 'age' với giá trị 25
```

2. Khởi tạo thuộc tính đối tượng:
- Trong các lớp (classes), bạn có thể khởi tạo thuộc tính của lớp thông qua constructor hoặc gán giá trị trực tiếp.

```ts
class Person {
  name: string;
  
  constructor(name: string) {
    this.name = name; // Khởi tạo thuộc tính 'name' qua constructor
  }
}

const person = new Person("Alice"); // Khởi tạo đối tượng với giá trị cho 'name'
```

3. Khởi tạo tham số hàm:
- Tham số của một hàm có thể được khởi tạo với giá trị mặc định.

```ts
function greet(name: string = "Guest") {
  console.log(`Hello, ${name}!`); // Khởi tạo 'name' với giá trị mặc định "Guest"
}

greet(); // Output: Hello, Guest!
```

4. Khởi tạo mảng và đối tượng:
- Khi bạn tạo mảng hoặc đối tượng, bạn có thể khởi tạo chúng với các giá trị cụ thể.

```ts
let numbers: number[] = [1, 2, 3]; // Khởi tạo mảng với các giá trị
let person = { name: "Alice", age: 30 }; // Khởi tạo đối tượng với các thuộc tính
```

- Ví dụ về khởi tạo trong lớp:

```ts
class Coder {
  secondLang: string;

  constructor(
    public readonly name: string, 
    public music: string, 
    private age: number, 
    protected lang: string
  ) {
    // Khởi tạo thuộc tính 'secondLang' với giá trị mặc định
    this.secondLang = "JavaScript";
  }
}
```

## Static

```ts
class Peeps {
    static count: number = 0 // // Khai báo thuộc tính tĩnh 'count'

    // Khai báo phương thức tĩnh 'getCount'
    static getCount(): number {
        return Peeps.count // Truy cập thuộc tính tĩnh 'count' từ phương thức tĩnh
    }
}
```

- Trong đoạn mã bạn đã cung cấp, bạn đang sử dụng các thành phần tĩnh (static) của lớp trong TypeScript. Đây là cách để quản lý và truy cập các thuộc tính và phương thức mà không cần phải tạo một đối tượng từ lớp.

- Các điểm quan trọng:

1. Thuộc tính tĩnh (static count):
- static count: number = 0; khai báo một thuộc tính tĩnh count với giá trị mặc định là 0. Thuộc tính tĩnh thuộc về lớp, không phải về các đối tượng của lớp. Điều này có nghĩa là bạn có thể truy cập thuộc tính này mà không cần tạo một đối tượng của lớp Peeps.

2. Phương thức tĩnh (static getCount()):
- static getCount(): number { ... } khai báo một phương thức tĩnh getCount có thể được gọi trên lớp Peeps mà không cần một đối tượng. Phương thức này trả về giá trị của thuộc tính tĩnh count.

## Cách sử dụng:
- Bạn có thể gọi phương thức tĩnh và truy cập thuộc tính tĩnh của lớp mà không cần tạo đối tượng:

```ts
console.log(Peeps.getCount()); // Output: 0
```

## Thay đổi giá trị thuộc tính tĩnh:
- Bạn có thể thay đổi giá trị của thuộc tính tĩnh từ bên ngoài lớp:

```ts
Peeps.count = 5; // Thay đổi giá trị của thuộc tính tĩnh 'count'
console.log(Peeps.getCount()); // Output: 5
```

## Lưu ý:

- Không thể truy cập thuộc tính tĩnh qua đối tượng: Các thuộc tính và phương thức tĩnh không thể được truy cập qua các đối tượng của lớp. Chúng chỉ có thể được truy cập qua tên lớp.

```ts
const p = new Peeps();
console.log(p.getCount()); // Lỗi: 'getCount' là phương thức tĩnh và không thể được truy cập từ đối tượng
```

- Thay đổi giá trị tĩnh: Việc thay đổi giá trị của thuộc tính tĩnh sẽ ảnh hưởng đến tất cả các phương thức tĩnh và các lớp khác nếu lớp này được kế thừa, vì thuộc tính tĩnh là chung cho toàn bộ lớp.

## Tổng kết: 
- Sử dụng các thành phần tĩnh trong lớp là một cách hiệu quả để quản lý và truy cập dữ liệu hoặc phương thức không liên quan đến các đối tượng cụ thể của lớp đó. Bạn có thể sử dụng thuộc tính tĩnh để lưu trữ thông tin chung cho toàn bộ lớp và các phương thức tĩnh để thực hiện các hành động liên quan đến thông tin đó.

## Index Signature

- Index signatures trong TypeScript cho phép bạn định nghĩa các thuộc tính mà bạn không biết trước tên của chúng, nhưng bạn biết kiểu dữ liệu của chúng. Đây là cách để bạn có thể sử dụng các đối tượng như là các từ điển hoặc bảng băm (hash maps) trong TypeScript.

## Cú pháp
- Có hai loại index signatures: cho chỉ số là số (number) và cho chỉ số là chuỗi (string).

## Index Signature với Chuỗi

```ts
interface StringDictionary {
    [key: string]: number;
}
```

- Trong ví dụ trên, StringDictionary định nghĩa một đối tượng mà bạn có thể truy cập các thuộc tính của nó bằng tên chuỗi (key), và giá trị của các thuộc tính đó sẽ luôn là số (number).

## Index Signature với Số

```ts
interface NumberDictionary {
    [index: number]: string;
}
```

- Trong ví dụ trên, NumberDictionary định nghĩa một đối tượng mà bạn có thể truy cập các thuộc tính của nó bằng chỉ số số (index), và giá trị của các thuộc tính đó sẽ luôn là chuỗi (string).

## Ví dụ
- Dưới đây là một số ví dụ để minh họa cách sử dụng index signatures:

## Ví dụ 1: Index Signature với Chuỗi

```ts
interface StringDictionary {
    [key: string]: number;
}

const scores: StringDictionary = {
    Alice: 85,
    Bob: 92,
    Charlie: 88
};

console.log(scores["Alice"]); // Output: 85
console.log(scores["Bob"]);   // Output: 92
console.log(scores.Charlie);   // Output: 88
```

## Ví dụ 2: Index Signature với Số

```ts
interface NumberDictionary {
    [index: number]: string;
}

const names: NumberDictionary = ["Alice", "Bob", "Charlie"];

console.log(names[0]); // Output: Alice
console.log(names[1]); // Output: Bob
```

## Ví dụ 3: Sử dụng cả hai loại index signature

```ts
interface MixedDictionary {
    [key: string]: string;  // Tất cả các thuộc tính dùng chuỗi làm key và có giá trị là chuỗi
    [index: number]: string; // Tất cả các thuộc tính dùng số làm key và có giá trị là chuỗi
}

const mixed: MixedDictionary = {
    "name": "Alice",
    1: "Bob"
};

console.log(mixed["name"]); // Output: Alice
console.log(mixed[1]);     // Output: Bob
```

## Quy tắc và lưu ý

1. Chỉ số kiểu chuỗi và số:

- Nếu bạn định nghĩa một index signature với chuỗi (string), bạn không thể định nghĩa một index signature với số (number) mà có kiểu khác. Trong thực tế, chỉ số kiểu số (number) là một dạng của chuỗi (string), vì vậy các giá trị thuộc tính kiểu số phải khớp với kiểu của các thuộc tính kiểu chuỗi nếu cả hai index signature được sử dụng.

2. Chỉ số kiểu chuỗi thường:

- Khi sử dụng index signature với chuỗi, TypeScript sẽ coi chỉ số kiểu số là chuỗi. Do đó, bạn thường sẽ chỉ cần định nghĩa index signature với chuỗi.

3. Đối tượng có thể không có index signature:

- Nếu bạn định nghĩa một index signature, các thuộc tính khác của đối tượng phải có kiểu dữ liệu tương thích với index signature.

## Tóm tắt

- Index signatures trong TypeScript cho phép bạn định nghĩa các thuộc tính của đối tượng với tên không xác định trước nhưng có kiểu dữ liệu nhất định. Chúng rất hữu ích khi làm việc với các cấu trúc dữ liệu như từ điển hoặc bảng băm, nơi mà tên thuộc tính có thể thay đổi nhưng kiểu dữ liệu của chúng là nhất quán.

## Ở bài 7, ta có lỗi: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'. No index signature with a parameter of type 'string' was found on type 'TransactionObj'.

- Lỗi TypeScript này xảy ra khi bạn cố gắng sử dụng một chỉ số chuỗi để truy cập vào một thuộc tính của một đối tượng, nhưng kiểu đối tượng đó không có một index signature cho kiểu chuỗi. Để khắc phục lỗi này, bạn cần đảm bảo rằng kiểu đối tượng có định nghĩa một index signature cho kiểu chuỗi, hoặc bạn cần sử dụng kiểu chính xác của thuộc tính.

## Ví Dụ về Vấn Đề
- Giả sử bạn có một kiểu đối tượng như sau:

```ts
interface TransactionObj {
  id: number;
  amount: number;
  date: string;
}

const transaction: TransactionObj = {
  id: 1,
  amount: 100,
  date: '2024-08-10'
};

const property: string = 'amount';
console.log(transaction[property]); // Lỗi: Element implicitly has an 'any' type...
```

## Nguyên Nhân : TransactionObj không có một index signature cho các thuộc tính kiểu chuỗi. TypeScript không biết rằng property sẽ là một khóa hợp lệ của TransactionObj, vì vậy nó báo lỗi.

## Cách Khắc Phục

1. Thêm Index Signature:

- Nếu bạn muốn cho phép các thuộc tính truy cập bằng chuỗi, bạn có thể thêm một index signature vào kiểu đối tượng:

```ts
interface TransactionObj {
  id: number;
  amount: number;
  date: string;
  [key: string]: number | string; // Thêm index signature
}

const transaction: TransactionObj = {
  id: 1,
  amount: 100,
  date: '2024-08-10'
};

const property: string = 'amount';
console.log(transaction[property]); // OK
```

- Lưu ý rằng việc thêm index signature sẽ cho phép tất cả các thuộc tính kiểu chuỗi và giá trị kiểu number hoặc string. Hãy đảm bảo rằng điều này phù hợp với yêu cầu của bạn.

2. Sử Dụng Kiểu Chính Xác:

- Nếu bạn biết trước các thuộc tính của đối tượng, bạn có thể sử dụng kiểu của các thuộc tính cụ thể:

```ts
const property: keyof TransactionObj = 'amount'; // Đảm bảo 'property' là một khóa hợp lệ
console.log(transaction[property]); // OK
```

- keyof TransactionObj sẽ cho phép property chỉ nhận các giá trị là các khóa hợp lệ của TransactionObj.

3. Kiểm Tra và Xử Lý Vòng Lặp:

- Nếu bạn cần truy cập thuộc tính động của đối tượng và không thể xác định trước các khóa hợp lệ, hãy chắc chắn rằng các thuộc tính bạn đang truy cập thực sự tồn tại trong đối tượng và xử lý các trường hợp không hợp lệ:

```ts
const property: string = 'amount';
if (property in transaction) {
  console.log(transaction[property as keyof TransactionObj]); // OK
} else {
  console.error('Property does not exist');
}
```

## Tóm Tắt

- Thêm Index Signature: Nếu bạn muốn cho phép các thuộc tính truy cập bằng chuỗi.
- Sử Dụng Kiểu Chính Xác: Nếu bạn biết các thuộc tính hợp lệ và muốn đảm bảo an toàn kiểu.
- Kiểm Tra Vòng Lặp: Để xử lý các thuộc tính động và đảm bảo rằng chúng tồn tại trong đối tượng.

## Khi bạn sử dụng vòng lặp for...in để lặp qua các thuộc tính của một đối tượng trong TypeScript, kiểu của biến dùng để lặp (transaction trong trường hợp này) là kiểu string, vì for...in luôn trả về các khóa của đối tượng dưới dạng chuỗi. Điều này có thể dẫn đến lỗi khi bạn cố gắng truy cập giá trị của thuộc tính bằng cách sử dụng một kiểu không đúng.

- Dưới đây là một ví dụ và cách khắc phục:

## Ví Dụ về Vấn Đề
- Giả sử bạn có một đối tượng transactions mà các thuộc tính của nó là các số, và bạn muốn tính tổng các giá trị:

```ts
interface Transactions {
  [key: string]: number;
}

const transactions: Transactions = {
  payment1: 100,
  payment2: 200,
  payment3: 300
};

let total = 0;

for (const transaction in transactions) {
  total += transactions[transaction]; // Lỗi: `transaction` là kiểu `string`, cần phải ép kiểu
}
```

## Cách Khắc Phục

1. Ép Kiểu Chính Xác:
- Vì transaction là kiểu string, bạn cần ép kiểu nó thành một khóa hợp lệ của transactions để truy cập giá trị:

```ts
for (const transaction in transactions) {
  total += transactions[transaction as keyof typeof transactions];
}
```

- transaction as keyof typeof transactions đảm bảo rằng TypeScript hiểu rằng transaction là một khóa hợp lệ của đối tượng transactions.

2. Sử Dụng Object.values:
- Nếu bạn chỉ cần tính tổng các giá trị và không cần biết các khóa, bạn có thể sử dụng Object.values để lấy mảng các giá trị và tính tổng:

```ts
const values = Object.values(transactions);
total = values.reduce((sum, value) => sum + value, 0);
```

- Object.values(transactions) trả về một mảng chứa tất cả các giá trị của đối tượng transactions.
- reduce được sử dụng để tính tổng các giá trị trong mảng.

## Ví Dụ Hoàn Chỉnh

- Sử Dụng Ép Kiểu

```ts
interface Transactions {
  [key: string]: number;
}

const transactions: Transactions = {
  payment1: 100,
  payment2: 200,
  payment3: 300
};

let total = 0;

for (const transaction in transactions) {
  total += transactions[transaction as keyof typeof transactions];
}

console.log(total); // Output: 600
```

- Sử Dụng Object.values

```ts
interface Transactions {
  [key: string]: number;
}

const transactions: Transactions = {
  payment1: 100,
  payment2: 200,
  payment3: 300
};

const values = Object.values(transactions);
const total = values.reduce((sum, value) => sum + value, 0);

console.log(total); // Output: 600
```

## Tóm Tắt
- Vòng Lặp for...in: Khi sử dụng, nhớ rằng biến lặp (transaction) có kiểu string. Cần ép kiểu khi truy cập giá trị của thuộc tính.
- Sử Dụng Object.values: Đơn giản hơn khi chỉ cần tính tổng giá trị của các thuộc tính mà không cần quan tâm đến tên của chúng.

## Giải thích rõ hơn về lỗi 

```rust
Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'.
No index signature with a parameter of type 'string' was found on type 'TransactionObj'.
```

- Điều này xảy ra vì TypeScript không nhận diện rằng thuộc tính có thể được truy cập bằng chuỗi. Để TypeScript chấp nhận việc truy cập thuộc tính bằng chuỗi, bạn cần đảm bảo rằng kiểu của đối tượng có định nghĩa một index signature cho kiểu chuỗi hoặc sử dụng các kỹ thuật khác để đảm bảo rằng bạn đang truy cập đúng thuộc tính.

## Lý Do Phải Ép Kiểu

1. Thiếu Index Signature

- Nếu kiểu đối tượng của bạn không định nghĩa index signature cho chuỗi, TypeScript không cho phép bạn sử dụng chuỗi để truy cập các thuộc tính của đối tượng. Ví dụ:

```ts
interface TransactionObj {
  id: number;
  amount: number;
  date: string;
}

const todaysTransactions: TransactionObj = {
  id: 1,
  amount: 100,
  date: '2024-08-10'
};

// Lỗi: Không thể sử dụng chuỗi để truy cập thuộc tính của TransactionObj
console.log(todaysTransactions['Pizza']); 
```

- Ở đây, todaysTransactions không có index signature cho kiểu chuỗi, nên TypeScript không cho phép bạn sử dụng 'Pizza' làm chỉ số.

2. Sử Dụng keyof

- Để truy cập thuộc tính của đối tượng một cách an toàn khi bạn biết trước các khóa, bạn có thể sử dụng keyof để chỉ định rõ các khóa hợp lệ:

```ts
const property: keyof TransactionObj = 'amount';
console.log(todaysTransactions[property]); // OK
```

- Ở đây, property phải là một trong các khóa hợp lệ của TransactionObj (tức là 'id', 'amount', hoặc 'date').

## Các Tình Huống Cần Ép Kiểu

1. Truy Cập Thuộc Tính Động
- Khi bạn làm việc với các thuộc tính động mà không biết trước tên chính xác, bạn cần phải có một cách để đảm bảo rằng TypeScript nhận diện chính xác kiểu dữ liệu của thuộc tính. Nếu bạn muốn sử dụng các thuộc tính động, có thể sử dụng index signature:

```ts
interface TransactionObj {
  [key: string]: number | string; // Cho phép truy cập bằng chuỗi
  id: number;
  amount: number;
  date: string;
}

const todaysTransactions: TransactionObj = {
  id: 1,
  amount: 100,
  date: '2024-08-10'
};

console.log(todaysTransactions['amount']); // OK
```

- Ở đây, index signature [key: string]: number | string cho phép bạn sử dụng chuỗi để truy cập các thuộc tính, nhưng cũng cần đảm bảo rằng kiểu của các giá trị phù hợp.

2. Chắc Chắn về Kiểu Dữ Liệu

- Nếu bạn chắc chắn về kiểu dữ liệu, bạn có thể sử dụng ép kiểu để hướng dẫn TypeScript:

```ts
const property = 'amount' as keyof TransactionObj;
console.log(todaysTransactions[property]); // OK
```

- property được ép kiểu thành keyof TransactionObj, đảm bảo rằng chỉ những khóa hợp lệ được sử dụng.

## Tóm Tắt
- Index Signature: Cung cấp khả năng truy cập các thuộc tính của đối tượng bằng chuỗi nếu kiểu đối tượng không có các khóa cố định.
- keyof: Đảm bảo truy cập thuộc tính của đối tượng một cách chính xác khi biết trước các khóa hợp lệ.
- Ép Kiểu: Hướng dẫn TypeScript hiểu rằng một biến có kiểu chính xác để tránh lỗi khi truy cập thuộc tính.

## Nếu bạn thêm readonly vào index signature trong TypeScript, điều đó có nghĩa là các thuộc tính không thể bị thay đổi sau khi được gán giá trị lần đầu tiên. Đây là một cách để đảm bảo rằng các thuộc tính không thể được thay đổi, giúp bảo vệ tính bất biến của đối tượng.

## Ví Dụ Với readonly Index Signature
- Khi sử dụng readonly với index signature, bạn cho phép đối tượng có các thuộc tính có thể được truy cập qua chuỗi, nhưng không thể thay đổi giá trị của các thuộc tính đó sau khi được gán giá trị lần đầu tiên.

```ts
interface TransactionObj {
  readonly [key: string]: number | string;
  id: number;
  amount: number;
  date: string;
}

const todaysTransactions: TransactionObj = {
  id: 1,
  amount: 100,
  date: '2024-08-10'
};

// Thử thêm thuộc tính mới
todaysTransactions['Dave'] = 300; // Lỗi: Index signature in type 'TransactionObj' only permits reading.

// Thử thay đổi thuộc tính đã có
todaysTransactions['amount'] = 200; // Lỗi: Index signature in type 'TransactionObj' only permits reading.

console.log(todaysTransactions['amount']); // 100
```

## Tóm Tắt

- readonly Index Signature: Chỉ cho phép đọc giá trị của thuộc tính và ngăn chặn việc thay đổi giá trị sau khi được gán lần đầu tiên.
- Sử Dụng: Khi bạn muốn bảo vệ tính bất biến của đối tượng hoặc các thuộc tính không được thay đổi sau khi đã được thiết lập.
- Lỗi Khi Thay Đổi: Nếu bạn cố gắng thay đổi giá trị của thuộc tính đã được định nghĩa bằng readonly index signature, TypeScript sẽ báo lỗi.

##  Trong TypeScript, cú pháp interface Incomes { [key: string | number]: number } không hoàn toàn chính xác và sẽ gây lỗi biên dịch. Đặc biệt, index signature trong TypeScript chỉ cho phép một loại chỉ số (chuỗi hoặc số) tại một thời điểm, không phải cả hai loại cùng một lúc.

## Ví Dụ Không Hợp Lệ
- Cú pháp interface Incomes { [key: string | number]: number } không hợp lệ vì:

- TypeScript không hỗ trợ kết hợp string và number cho index signature trong một interface.
- Bạn cần chọn giữa string hoặc number cho index signature.

## Ví Dụ Chính Xác
- Nếu bạn muốn cho phép các thuộc tính động với cả string và number, bạn có thể tạo hai interface khác nhau và kết hợp chúng nếu cần:

```ts
interface StringIndexIncomes {
  [key: string]: number;
}

interface NumberIndexIncomes {
  [key: number]: number;
}

type Incomes = StringIndexIncomes & NumberIndexIncomes;

const incomes: Incomes = {
  salary: 5000,
  1: 2000,
};
```

## Tóm Tắt

- Index Signature: Bạn chỉ có thể sử dụng một loại chỉ số duy nhất, không phải cả string và number cùng một lúc.
- Sử Dụng Đúng Cú Pháp: Chọn string hoặc number cho index signature và đảm bảo rằng đối tượng của bạn tuân theo định nghĩa kiểu.

## Trong TypeScript, cú pháp interface Incomes { [key: 'salary']: number } không hợp lệ và sẽ dẫn đến lỗi biên dịch. Cú pháp này không đúng vì index signature không cho phép chỉ định cụ thể một tên thuộc tính như 'salary'.

## Giải thích rõ hơn về 1 đoạn code của Typescript

```ts
type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number>
```

- Cú pháp bạn sử dụng là hoàn toàn chính xác và là cách rất hiệu quả để định nghĩa các thuộc tính của một đối tượng trong TypeScript khi bạn biết trước các khóa cụ thể mà bạn muốn sử dụng.

## Giải Thích

1. type Streams = 'salary' | 'bonus' | 'sidehustle'

- Đây là một kiểu union (Streams) mà chỉ cho phép các giá trị là 'salary', 'bonus', hoặc 'sidehustle'. Điều này giúp bạn chỉ định rõ ràng các khóa mà đối tượng của bạn có thể có.

2. type Incomes = Record<Streams, number>

- Record<K, T> là một utility type trong TypeScript mà tạo ra một đối tượng với các khóa kiểu K và các giá trị kiểu T. Trong trường hợp này:

- K là kiểu Streams, tức là 'salary' | 'bonus' | 'sidehustle'.
- T là kiểu number.

- Kết quả là Incomes sẽ là một đối tượng với các khóa 'salary', 'bonus', và 'sidehustle', và các giá trị của chúng sẽ là kiểu number.

## Ví dụ:

```ts
type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number>;

const myIncomes: Incomes = {
  salary: 5000,
  bonus: 2000,
  sidehustle: 1500,
};

// Sử dụng đối tượng
console.log(myIncomes.salary);     // 5000
console.log(myIncomes.bonus);      // 2000
console.log(myIncomes.sidehustle); // 1500
```

```ts
type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number | string>;

const myIncomes: Incomes = {
  salary: 5000,
  bonus: '2000', // Có thể là string
  sidehustle: 1500,
};

// Sử dụng đối tượng
console.log(myIncomes.salary);     // 5000
console.log(myIncomes.bonus);      // '2000'
console.log(myIncomes.sidehustle); // 1500
```

## Lợi Ích Của Record
- Chắc Chắn về Kiểu: Đảm bảo rằng tất cả các thuộc tính cần thiết ('salary', 'bonus', 'sidehustle') có mặt và có kiểu number.
- Giảm Sai Sót: Ngăn chặn việc thêm các thuộc tính không mong muốn và giúp phát hiện lỗi khi bạn không cung cấp đủ các thuộc tính cần thiết.

## Tóm Tắt

- Record<Keys, Type>: Một utility type rất hữu ích trong TypeScript để định nghĩa các đối tượng với các khóa cụ thể và kiểu giá trị cố định.
- Chắc Chắn về Kiểu: Đảm bảo rằng các thuộc tính và kiểu giá trị được chỉ định một cách chính xác.
