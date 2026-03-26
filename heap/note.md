# HEAP
### PRIORITY QUEUES PQ
1. Like queue, specific ordered by priority
2. Like hospital, people are treated based on the severity
3. an abstract data type, which can be implemented using other fundamental data structures.
4. One way is to use an ordered array but some constraint: when insert, maintain order. data can only be removed from the end of array (which is the front of priority queue)
5. Using ordered array can be expensive especially the insertion (O(N)). So we use Heap as the base for PQ

### Heap
1. many type of heap, Binary heap is one
2. BH is specific kind of Binary tree( node has only two children)
3. max-heap or min-heap
4. lean forward max-heap, but also mean heap
5. condition of heap: 1. value of each node is > than each descendant nodes (heap condtion) 2. tree must be complete
#### Heap condtion
1. each node value must be > than its descendants (max-heap)
2. each node value must be < than its descendants (min-heap)
#### Complete tree
1. all rows are fileed with node, no missing node on the row or level. there can be empty nodes at the bottom level but there would be no node to the right of the empty position
#### Heap properties
1. weakly ordered (no actual ordering rule so make it hard to search for value, we know if the value is descendant of a node but thats about it)
2. root node will have the greatest (max-heap) or smallest (min-heap) value. This is key to priority queue implementation
3. last node of heap: the right most node at the bottom level of the heap
#### Heap Insertion
1. create empty node, add value, then add this node as the last node of the heap (doing other wise will result in incomplete tree)
2. compare value of the node to its parent.
3. if new node is greater than the parent, swap new node with the parent node
4. reapeat step 3 (trickling the node up thru the heap) until we get to the top level
5. efficiency is at O(logN)
#### Heap Deletion
1. move the last node to the root, effectively deleted the root node (since we remove the top priority item first)
2. trickle the last node down to its position
##### How to trickle down
1. 

##### How to look for the last node?
1. 