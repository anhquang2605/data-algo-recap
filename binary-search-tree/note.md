# Binary Search Tree
### Why BST?
1. Sometime we need to store data in sorted order for better access time
2. Ordered array is great but whenever delete or insert a data, it will require shifting of the array which can be costly
3. Hash table is great for speed, but they do not maintain order
4. Binary search tree does all of that while maintaining order

### Tree
1. root is the top level node
2. balanced tree is when the nodes subtrees has the same number of nodes in it
3. imbalance

### BST
1. binary: each node has zero, one, or two children
2. each node can only have one left and one right child
3. left child can only contain value less that the node it self. right descendants only has value greater than the node
4. searching with BST is O(logN) since we cut down the search pool in half everytime we move down the level
5. when we insert data into tree, inserting by order will result in a linear tree making the search O(N). should randomize data first before insertion
#### Deleting
1. When deleting a node:
    a. When a node does not have children, delete it
    b. node has one children, replace it with the child
    c. node has two children, find a successor node
2. Successor node: a child that is the smallest among the greater values of the deleted node. 