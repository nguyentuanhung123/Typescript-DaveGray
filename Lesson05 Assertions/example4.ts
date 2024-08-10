// THE DOM

/**
 * Khi bạn sử dụng document.querySelector('img'), TypeScript sẽ xác định kiểu của img là HTMLImageElement | null. 
 * Điều này có nghĩa là biến img có thể là một phần tử hình ảnh (HTMLImageElement) hoặc có thể là null nếu không tìm thấy phần tử phù hợp.
 * 
 * Property 'src' does not exist on type 'HTMLElement'.
 */
const img = document.querySelector('img')!
const myImg = document.getElementById('img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('img')

img.src
myImg.src

