interface Student {
    [key: string]: string | number | number[] | undefined, // thêm undefined do có optional
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student.test); // Property 'test' does not exist on type 'Student' (Trước khi ta thêm index signature).
console.log(student.test); // undefined (Sau khi ta thêm index signature).

for (const key in student) {
    // console.log(`${key}: ${student[key]}`); // Chỉ hiện kết quả nếu có index signature ở interface
    console.log(`${key}: ${student[key as keyof Student]}`); // Đảm bảo có kết quả kể cả khi không có index signature
}

/**
 * Trong trường hợp ta không biết keyof của type nào đã định nghĩa cho object thì ta làm như bên dưới
 * typeof student = Student
 */
Object.keys(student).map((key) => {
    console.log(student[key as keyof typeof student]); // Đảm bảo có kết quả kể cả khi không có index signature
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA'); // Student GPA: 3.5

