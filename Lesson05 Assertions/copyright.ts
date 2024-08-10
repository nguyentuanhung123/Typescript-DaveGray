// Original JS code

/**
 * 'year' is possibly 'null'.
 * Type 'number' is not assignable to type 'string'.
 */
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear

// 1st variation: 

/**
 * Phương thức setAttribute yêu cầu giá trị của thuộc tính phải là một chuỗi. 
 * thisYear là một số (number), vì vậy bạn cần chuyển đổi nó thành chuỗi.
 */

// let year: HTMLElement | null 
// year = document.getElementById("year");
// let thisYear: string 
// thisYear = new Date().getFullYear().toString();
// if(year) {
//     year.setAttribute("datetime", thisYear);
//     year.textContent = thisYear
// }

// 2nd variation

const year = document.getElementById("year") as HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear
