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
