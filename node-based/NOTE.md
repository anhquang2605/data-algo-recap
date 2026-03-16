### Linked List
1. Unlike array (data is contiguous next to each other), linked list data is scatter across the memory
2. Connected data that were dispersed acrossed are called nodes
3. Each node has extra bit of info beside the data: the location of the next node
4. final node contain null data
5. Best for memory, since we dont need to preallocate memory like array. when we need to expand the linked list, just add new one and allocate new location
6. To read, O(N), big disavantage over array