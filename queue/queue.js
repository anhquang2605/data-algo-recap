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

class Queue {
    constructor() {
        this.queue = [];
    } 
    add(value) {
        this.queue.push(value);
    }
    remove() {
        if(this.queue.length === 0) {
            return null;
        }
        return this.queue.shift();
    }
    peek() {
        if(this.queue.length === 0) {
            return null;
        }
        return this.queue[0];
    }
    size() {
        return this.queue.length;
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    clear() {
        this.queue = [];
    }
    print() {
        console.log(this.queue);
    }
}

const revereseString = (str) => {
    theStack = new Stack();
    for (let i = 0; i < str.length; i++) {
        theStack.push(str[i]);
    }
    let reversed = "";
    while (!theStack.isEmpty()) {
        reversed += theStack.pop();
    }
    return reversed;
}

const string = "Hello World!";