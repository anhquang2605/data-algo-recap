class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(item){
        this.items.push(item);
    }
    dequeue(){
        return this.items.shift();
    }
    peek(){ 
        return this.items[0];
    }

}
class Vertex{
    constructor(value){
        this.value = value;
        this.adjacencyList  = [];
    }
    addAdjacent(vertex){
        if(!this.adjacencyList.includes(vertex)){
            this.adjacencyList.push(vertex);
        } 
        vertex.addAdjacent(this);
    }
    
    DFS(vertex, visited = new Set()){
        if(visited.has(vertex.value)){
            return;
        }
        visited.add(vertex.value);
        for(let adjacent of vertex.adjacencyList){
            if(!visited.has(adjacent.value)){
                visited.add(adjacent.value);
                this.DFS(adjacent, visited);
            } 
        }
    }
    //to visist all the adjacent vertices first of current vertex
    BFS(vertex){
        let visited = new Set();
        let queue = new Queue();
        queue.enqueue(vertex);
        visited.add(vertex.value);
        while(queue.items.length > 0){
            let current = queue.dequeue();
            for(let adjacent of current.adjacencyList){
                if(!visited.has(adjacent.value)){
                    visited.add(adjacent.value);
                    queue.enqueue(adjacent);
                }
            }
        }
    }
    DFSValue(value, vertex, visited = new Set(),){
        if(vertex.value === value){
            return vertex;
        }
        visited.add(vertex.value);
        for(let adjacent of vertex.adjacencyList){
            if(!visited.has(adjacent.value)){
                visited.add(adjacent.value);
                let found = this.DFSValue(value, adjacent, visited);
                if(found){
                    return found;
                }
            }
        }
        return null;
    }
}