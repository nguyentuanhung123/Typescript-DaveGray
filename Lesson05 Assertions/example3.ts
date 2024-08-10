// 10 as string

/**
 * Trong TypeScript, đoạn mã (10 as unknown) as string là một cách để ép kiểu giá trị 10 từ kiểu number sang kiểu string 
 * bằng cách sử dụng loại unknown như một bước trung gian.
 * 
 * 10 as unknown:
 * Phần này ép kiểu giá trị 10 từ kiểu number sang kiểu unknown. 
 * Trong TypeScript, kiểu unknown là một loại an toàn hơn so với any vì bạn không thể thao tác trực tiếp với giá trị có kiểu unknown mà không thực hiện kiểm tra kiểu trước.
 * 
 * (10 as unknown) as string:
 * Sau khi giá trị đã được ép kiểu thành unknown, phần này tiếp tục ép kiểu nó thành string. 
 * Điều này có nghĩa là TypeScript sẽ xem giá trị 10 như là một chuỗi, 
 * nhưng trên thực tế, giá trị này vẫn là một số. 
 * Việc ép kiểu này không thay đổi giá trị thực tế mà chỉ thay đổi cách TypeScript hiểu kiểu của giá trị đó.
 */
(10 as unknown) as string