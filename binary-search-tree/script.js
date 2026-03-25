class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class BST {
    constructor(value) {
        this.root = new TreeNode(value);
    }
    search() {
        let currentNode = this.root;
        while(currentNode !== null){
            if(currentNode.value === value) return currentNode;
            else if (currentNode.value > value) currentNode = currentNode.left;
            else currentNode = currentNode.right;
        }
        return null;
    }
    insert(value) {
        //no code generated
        let currentNode = this.root;
        while(currentNode){
            if(currentNode.value === value) return;
            if(currentNode.value < value && currentNode.right === null) {
                currentNode.right = new TreeNode(value);
                return;
            }
            else if (currentNode.value > value && currentNode.left === null) {
                currentNode.left = new TreeNode(value);
                return;
            } 
            else if (currentNode.value > value) currentNode = currentNode.left;
            else if (currentNode.value < value) currentNode = currentNode.right;
        }
        currentNode
    }
    print(node) {
        if(node === null) return;
        this.print(node.left);
        console.log(node.value);
        this.print(node.right);
    }
    delete(value , node) {
        if (!node) 
        {return null}
        else if (value < node.value){
            //find the value to be deleted, also replace the left child of this node with the result of the deletion which help maintain the BST child and parent relationship. only when there is actual deletion, then the returned node is replaced with the successor
            node.left = this.delete(value, node.left);
            return node;//return the original node to maintain the relationship
        }
        else if (value > node.value){
            node.right = this.delete(value, node.right);
            return node;
        }
        else if (value == node.value){//delete the node then return the successors
            if (node.right == null) {
                return node.left;
            }
            else if (node.left == null) {
                return node.right;
            }
            else {
                node.value = this.lift(node.right, node);
                return node;
            }
        }
    }
    lift (node, nodeToDel){
        if (node.left){
            node.left = this.delete(nodeToDel.value, node.left);
            return node;
        }else {
            nodeToDel.value = node.value
            return node.right;
        }
    }
}

const tree = new BST(33);
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.print(tree.root);