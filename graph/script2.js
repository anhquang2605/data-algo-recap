class WeightGraphVertex{
    constructor(value){
        this.value = value;
        this.adjacencyList  = new Map([]);
    }
    addAdjacent(vertex, weight){
        if(!this.adjacencyList.has(vertex.value)){
            this.adjacencyList.set(vertex.value, weight);
        }
    }
}
const djikstra = (start, end) => {
    const cheapeestPriceTable = {}; //storing the cheapest price to get from start to each vertex and beyond
    const cheapestPreviousVertexTable = {};//storing the previous vertex for each cheapest price
    const visitedVertices = {};
    const unvisitedVertices = new Set();
    unvisitedVertices.add(start.value);
    cheapeestPriceTable[start.value] = 0;
    let currentVertex = start;
    while(currentVertex){
        visitedVertices[currentVertex.value] = true;
        unvisitedVertices.delete(currentVertex.value);
        const adjacentVertices = currentVertex.adjacencyList;
        for(const [vertex, weight] of adjacentVertices.entries()){
            if(!visitedVertices[vertex]){
                unvisitedVertices.add(vertex);
                const priceToAdjacentVertex = cheapeestPriceTable[currentVertex.value] + weight;
                if(!cheapeestPriceTable[vertex] || priceToAdjacentVertex < cheapeestPriceTable[vertex]){
                    cheapeestPriceTable[vertex] = priceToAdjacentVertex;
                    cheapestPreviousVertexTable[vertex] = currentVertex.value;
                }               
            }
        }
        let cheapestToVisitVertext =cheapeestPriceTable[findCheapestPrice(cheapeestPriceTable, unvisitedVertices)];
        currentVertex = cheapestToVisitVertext;
    }
    const cheapestPath = [];
    let currentCheapestVertex = end.value;
    while(currentCheapestVertex !== start.value){
        cheapestPath.push(currentCheapestVertex);
        currentCheapestVertex = cheapestPreviousVertexTable[currentCheapestVertex];
    }
    cheapestPath.push(start.value);
    return cheapestPath.reverse();

}
const findCheapestPrice = (map, unvisitedVertices) => {
    let min = Infinity;
    let minKey = null;
    for(let key in map){
        if(unvisitedVertices.has(key) && map[key] < min){
            min = map[key];
            minKey = key;
        }
    }
    return minKey;
}
function removeItemOnce(arr, value) {
    const index = arr.indexOf(value);
    if (index !== -1) {
        arr.splice(index, 1); // Removes 1 element at the found index
    }
    return arr;
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

console.log(djikstra(alanta, elPaso));