class Heap {
    constructor() {
        this.heap = [];
    }
    root() {
        return this.heap[0];
    }
    last()  {
        return this.heap[this.heap.length - 1];
    }
}