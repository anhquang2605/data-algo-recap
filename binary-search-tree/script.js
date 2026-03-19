class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    search() {
        currentNode = this.root;
        while(currentNode !== null){
            if(currentNode.value === value) return currentNode;
            else if (currentNode.value > value) currentNode = currentNode.left;
            else currentNode = currentNode.right;
        }
        return null;
    }
    insert(value) {
        //no code generated
        currentNode = this.root;
        while(currentNode){
            if(currentNode.value === value) return;
            if(currentNode.value < value && currentNode.right === null) {
                currentNode.right = new TreeNode(value);
            }
            else if (currentNode.value > value && currentNode.left === null) {
                currentNode.left = new TreeNode(value);
            } 
            else if (currentNode.value > value) currentNode = currentNode.left;
            else if (currentNode.value < value) currentNode = currentNode.right;
        }
        currentN
    }
}
