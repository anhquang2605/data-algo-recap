# GRAPH
## why?
1. specialize in relationships by describing how data connected among each other
2. all trees are graphs, but not all graphs are tree

### Terms
1. Cycles: node connected circularly
2. fully connected: all nodes in graph connected each other in someway with other nodes even tho they are connected indirectly
3. Vertex: Node or individual data
4. edges: the line between two vertex, nodes connected by an edge are adjacent to each other

### directed vs undirected
1. directed: indicate direction of relationship: A -> B vs B -> A, A follows B, B follows A
2. undrected: no direction, just meant relations: A - B, A and B are friends

### Implementations
1. Hash tables
2. Object oriented

### Searcj
1. can mean different things
2. can mean to search a specific vertex
3. but most important of all: if had access to one vertex of the graph, we must find another particular vertex that somehow connected to this vertex
4. path: sequence of edges to get from one vertex to another
5. use case: (1) search for particular vertex within connected graph. (2) to know if two vertices are connected. (3) to traverse 

#### Depth first search
1. search until exasuting all adjacent list then back out
2. keys are to keep track of the vertices visisted so far (to avoid going in a circle)
3. keep track of visisted vertices by using a hash table

#### Breadth first search
1. BFS
2. use queue istead of recursion

#### graph search efficiency
1. O(V + E) V: vertext, E:edge


## Weighted graph
1. extra weight value on each edge.

## The shortest path problem and Djikstrar's Algorithm