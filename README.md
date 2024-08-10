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