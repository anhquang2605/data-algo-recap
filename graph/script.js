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
        for(let adjacent of vertex.adjacencyList){
            if(!visited.has(adjacent.value)){
                visited.add(adjacent.value);
                this.DFS(adjacent, visited);
            } 
        }

    }
}