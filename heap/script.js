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
    insert(value){
        let newNodeIndex = this.heap.length - 1;
        this.heap.push(value);
        //trickle up using while loop, the index > 0 to make sure that we stop at the root node
        while(newNodeIndex > 0 && this.heap[newNodeIndex] > this.heap[this.parentIndex(newNodeIndex)]){
            [this.heap[newNodeIndex], this.heap[this.parentIndex(newNodeIndex)]] = [this.heap[this.parentIndex(newNodeIndex)], this.heap[newNodeIndex]];
            newNodeIndex = this.parentIndex(newNodeIndex);
        }
    }
    hasGreaterChild(index){
        //check if left child exist and is greater or right child exist and is greater
        return this.heap[this.leftChildIndex(index)] && this.heap[this.leftChildIndex(index)] >  this.heap[index] 
        || this.heap[this.rightChildIndex(index)] && this.heap[this.rightChildIndex(index)] > this.heap[index];
    }
    getLargerChildIndex(index){
        if(!this.heap[this.rightChildIndex(index)]){
            return this.leftChildIndex(index);
        }
        if(this.heap[this.leftChildIndex(index)] < this.heap[this.rightChildIndex(index)]){
            return this.rightChildIndex(index);
        } else {
            return this.leftChildIndex(index);
        }
    }
    delete(){
        toBeDeleted = this.root();
        this.heap[0] = this.heap.pop();
        let trickleDownIndex = 0;
        while(this.hasGreaterChild(trickleDownIndex)){
           let largerChildIndex = this.getLargerChildIndex(trickleDownIndex);
           [this.heap[trickleDownIndex], this.heap[largerChildIndex]] = [this.heap[largerChildIndex], this.heap[trickleDownIndex]];
           trickleDownIndex = largerChildIndex;
        }
    }
}