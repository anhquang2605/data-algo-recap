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
    BFSValue(value, vertex){
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
    BFSShortestPathBetweenTwoVertices(start, end){
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
    shortestPathBetweenTwoVertices(start, end){

        const cheapeestPriceTable = {}; //storing the cheapest price to get from start to each vertex and beyond
        const cheapestPreviousVertexTable = {};//storing the previous vertex for each cheapest price
        const visitedVertices = {};
        const unvisitedVertices = {};
        unvisitedVertices[start.value] = start;
        cheapeestPriceTable[start.value] = 0;
        let currentVertex = start;
        //issue right now, the current vertex need to be an actual vertex. at the end of the while loop, we need to asign the vertex node not the vertex value to the current vertex.
        while(currentVertex){
            visitedVertices[currentVertex.value] = currentVertex;
            delete unvisitedVertices[currentVertex.value];
            const adjacentVertices = currentVertex.adjacencyList;
            for(const [vertex] of adjacentVertices){
                const vertexValue = vertex.value;
                if(!visitedVertices[vertexValue]){
                    unvisitedVertices[vertexValue] = vertex;
                    const priceToAdjacentVertex = cheapeestPriceTable[currentVertex.value] + 1;
                    if(!cheapeestPriceTable[vertexValue] || priceToAdjacentVertex < cheapeestPriceTable[vertexValue]){
                        cheapeestPriceTable[vertexValue] = priceToAdjacentVertex;
                        cheapestPreviousVertexTable[vertexValue] = currentVertex;
                    }               
                }
            }
            let cheapestToVisitVertext =findCheapestPrice(cheapeestPriceTable, unvisitedVertices);
            currentVertex = cheapestToVisitVertext;
        }
        const cheapestPath = [];
        let currentCheapestVertex = end;
        console.log(cheapestPreviousVertexTable);
        while(currentCheapestVertex.value  !== start.value){
            cheapestPath.push(currentCheapestVertex.value);
            currentCheapestVertex = cheapestPreviousVertexTable[currentCheapestVertex.value];
        }
        cheapestPath.push(start.value);
        return cheapestPath.reverse();
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