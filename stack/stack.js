//define stack class
class Stack {
    constructor() {
        this.stack = [];
    }
    push(value) {
        this.stack.push(value);
    }
    pop() {
        if(this.stack.length === 0) {
            return null;
        }
        return this.stack.pop();
    }
    read () {
        if(this.stack.length === 0) {
            return null;
        }
        return this.stack[this.stack.length - 1];
    }

    size () {
        return this.stack.length;
    }

    isEmpty () {
        return this.stack.length === 0;
    }

    clear () {
        this.stack = [];
    }

    print () {
        console.log(this.stack);
    }
    
    createStackFromArr (arr) {
        for (let i = 0; i < arr.length; i++) {
            this.push(arr[i]);
        }
    }
}

const stack = new Stack();
stack.createStackFromArr([1, 2, 3, 4, 5]);
stack.print();
stack.pop();
stack.print();