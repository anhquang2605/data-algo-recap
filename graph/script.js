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
    
}
function DFS(vertex, visited = new Set()) {
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
   function BFS(vertex)  {
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
    function BFSValue(value, vertex) {
        let visited = new Set();
        let queue = new Queue();
        let level = 0;
        queue.enqueue(vertex);
        visited.add(vertex.value);
        while(queue.items.length > 0){
            let current = queue.dequeue();
            if(current.value === value){
                return current;
            }
            for(let adjacent of current.adjacencyList){
                if(!visited.has(adjacent.value)){
                    visited.add(adjacent.value);
                    queue.enqueue(adjacent);
                }
            }
            level++;
        }
        return null;
    }
    function BFSShortestPathBetweenTwoVertices(start, end)  {
        let visited = new Set();
        let queue = new Queue();
        let previousVertexTable = {};
        queue.enqueue(start);
        visited.add(start.value);
        previousVertexTable[start.value] = null;
        while(queue.items.length > 0){
            let current = queue.dequeue();
            if(current.value === end.value){
                break;
            }
            for(let adjacent of current.adjacencyList){
                if(!visited.has(adjacent.value)){
                    visited.add(adjacent.value);
                    queue.enqueue(adjacent);
                    previousVertexTable[adjacent.value] = current;
                }
            }
        }
        const path = [];
        let currentVertex = end;
        while(currentVertex){
            path.push(currentVertex.value);
            currentVertex = previousVertexTable[currentVertex.value];
        }
        return path.reverse();
    }
    function DFSValue(value, vertex, visited = new Set()) {
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

const Idris = new Vertex('Idris');
const Kamil = new Vertex('Kamil');
const Talia = new Vertex('Talia');
const Ken = new Vertex('Ken');
const Lina = new Vertex('Lina');
const Marco = new Vertex('Marco');
const Sasha = new Vertex('Sasha');
Idris.addAdjacent(Kamil);
Idris.addAdjacent(Talia);

Kamil.addAdjacent(Idris);
Kamil.addAdjacent(Lina);

Talia.addAdjacent(Idris);
Talia.addAdjacent(Ken);

Ken.addAdjacent(Talia);
Ken.addAdjacent(Marco);

Lina.addAdjacent(Kamil);
Lina.addAdjacent(Sasha);

Marco.addAdjacent(Ken);
Marco.addAdjacent(Sasha);

Sasha.addAdjacent(Lina);
Sasha.addAdjacent(Marco);

console.log(BFSShortestPathBetweenTwoVertices(Idris, Lina));