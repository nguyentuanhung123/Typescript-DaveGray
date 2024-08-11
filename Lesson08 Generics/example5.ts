/**
 * <T extends HasID>
 * T là một kiểu tổng quát (generic type) đại diện cho kiểu của các đối tượng trong mảng users. 
 * T phải mở rộng từ kiểu HasID, tức là T có ít nhất các thuộc tính được định nghĩa trong HasID.
 * 
 * K extends keyof T
 * K là một kiểu tổng quát khác đại diện cho các khóa (keys) của kiểu T. K có thể là một trong các thuộc tính của T.
 * 
 * users: T[]
 * users là một mảng các đối tượng có kiểu T. 
 * Vì T mở rộng từ HasID, nên các đối tượng trong users phải có ít nhất các thuộc tính của HasID, 
 * và có thể có thêm các thuộc tính khác.
 * 
 * key: K
 * key là một khóa của T, tức là nó phải là một thuộc tính hợp lệ của T.
 * 
 * T[K][]
 * T[K] đại diện cho kiểu của thuộc tính key trong kiểu T. Ví dụ, nếu key là 'name' và T là { id: number, name: string }, thì T[K] sẽ là string.
 * T[K][] là một mảng của các giá trị thuộc kiểu T[K].
 * 
 */

const usersArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618"
            }
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains"
        }
    }
];

interface HasID {
    id: number
}

const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map((user) => user[key]);
}

console.log(getUsersProperty(usersArray, "name")); // [ 'Leanne Graham', 'Ervin Howell' ]
console.log(getUsersProperty(usersArray, "email")); // [ 'Sincere@april.biz', 'Shanna@melissa.tv' ]
