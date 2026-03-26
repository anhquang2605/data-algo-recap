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
    leftChildIndex(index) {
        return 2 * index + 1;
    }
    rightChildIndex(index) {
        return 2 * index + 2;
    }
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
}