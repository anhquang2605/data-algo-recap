class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//create a linked list, only need to know the head
class LinkedList {
    constructor(node){
        this.head =     node;
        
    }
}
const node = new Node(3);
const node2 = new Node(4);
const node3 = new Node(5);
node.next = node2;
node2.next = node3;
const list = new LinkedList(node);