class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject("John")
console.log(store.state); // John

store.state = "Dave"

/**
 * Type 'number' is not assignable to type 'string'.
 * Ngay khi ta gắn John thì T đã là string
 */
// store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15])
console.log(myState.state); // [ 15 ]
myState.state = (['Dave', 42, true])
console.log(myState.state); // [ 'Dave', 42, true ]


