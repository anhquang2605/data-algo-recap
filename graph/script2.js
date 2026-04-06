class WeightGraphVertex{
    constructor(value){
        this.value = value;
        this.adjacencyList  = {};
    }
    addAdjacent(vertex, weight){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = weight;
        }
    }
}