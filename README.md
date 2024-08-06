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


