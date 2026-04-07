class WeightGraphVertex{
    constructor(value){
        this.value = value;
        this.adjacencyList  = {};
    }
    addAdjacent(vertex, weight){
        if(!this.adjacencyList[vertex.value]){
            this.adjacencyList[vertex.value] = weight;
        }
    }
}
const djikstra = (start, end) => {
    const cheapeestPriceTable = {}; //storing the cheapest price to get from start to each vertex and beyond
    const cheapestPreviousVertexTable = {};//storing the previous vertex for each cheapest price
    const visitedVertices = new Set();
    const unvisitedVertices = [];
    unvisitedVertices.push(start.value);
    cheapeestPriceTable[start.value] = 0;
    let currentVertex = start;
    while(currentVertex){
        visitedVertices.add(currentVertex.value);
        unvisitedVertices.delete(currentVertex.value);
        const adjacentVertices = currentVertex.adjacencyList;
        for(let adjacentVertex in adjacentVertices){
            let {vertex, weight} = adjacentVertices[adjacentVertex];
            if(!visitedVertices.has(vertex.value)){
                unvisitedVertices.push(vertex);
                const priceToAdjacentVertex = cheapeestPriceTable[currentVertex.value] + weight;
                if(!cheapeestPriceTable[vertex] || priceToAdjacentVertex < cheapeestPriceTable[vertex]){
                    cheapeestPriceTable[vertex] = priceToAdjacentVertex;
                    cheapestPreviousVertexTable[vertex] = currentVertex.value;
                }               
            }
        }
    }

}
const alanta = new WeightGraphVertex('Atlanta');
const boston = new WeightGraphVertex('Boston');
const chicago = new WeightGraphVertex('Chicago');
const denver = new WeightGraphVertex('Denver');
const elPaso = new WeightGraphVertex('El Paso');

alanta.addAdjacent(boston, 100);
alanta.addAdjacent(chicago, 160);
boston.addAdjacent(chicago, 120);
boston.addAdjacent(denver, 180);
chicago.addAdjacent(elPaso, 80);
denver.addAdjacent(chicago, 40);
denver.addAdjacent(elPaso, 140);
elPaso.addAdjacent(boston, 100);