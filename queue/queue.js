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