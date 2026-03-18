class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Node2{
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
//create a linked list, only need to know the head
class LinkedList {
    constructor(node){
        this.head =     node;
    }
    read (valueAtIndex) {
        if(valueAtIndex < 0) {
            return null;
        }
        let currentNode = this.head;
        for(let i = 0; i < valueAtIndex; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    readLast() {
        let currentNode = this.head;
        while(currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    printAll(){
        let currentNode = this.head;
        while(currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    search(value){
        let currentNode = this.head;
        while(currentNode.value !== value) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    insert(index, value){
        if (index == 0){
            const newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            const currentNode = this.read(index-1);
            const newNode = new Node(value);
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
    }
    delete(index) {
        if (index == 0){
            this.head = this.head.next;
        }
        else {
            const currentNode = this.read(index-1);
            currentNode.next = currentNode.next.next;
        }
    }
    reverseList() {
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;
        while(currentNode !== null){
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = nextNode;
            currentNode = nextNode.next;
        }
    }
}

class DoublyLinkedList {
    constructor(firstNode = null, lastNode = null)  {
        this.head = firstNode;
        this.tail = lastNode;
    }
    insertion(index, value){
        if(index = 0){
            const newNode = new Node2(value);
            newNode.next = this.head;
            this.head = newNode;
            
        }
    }
    insertAtEnd(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        
    }
    printAllReverse(){
        let currentNode = this.tail;
        while(currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.prev;
        }
    }
}
const node = new Node(3);
const node2 = new Node(4);
const node3 = new Node(5);
node.next = node2;
node2.next = node3;
const list = new LinkedList(node);
list.printAll();
list.reverseList();
list.printAll();