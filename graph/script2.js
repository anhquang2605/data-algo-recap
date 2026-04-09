class WeightGraphVertex{
    constructor(value){
        this.value = value;
        this.adjacencyList  = new Map([]);
    }
    addAdjacent(vertex, weight){
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex, weight);
        }
    }
}
const djikstra = (start, end) => {
    const cheapeestPriceTable = {}; //storing the cheapest price to get from start to each vertex and beyond
    const cheapestPreviousVertexTable = {};//storing the previous vertex for each cheapest price
    const visitedVertices = {};
    const unvisitedVertices = {};
    unvisitedVertices[start] = true;
    cheapeestPriceTable[start.value] = 0;
    let currentVertex = start;
    //issue right now, the current vertex need to be an actual vertex. at the end of the while loop, we need to asign the vertex node not the vertex value to the current vertex.
    while(currentVertex){
        visitedVertices[currentVertex] = true;
        delete unvisitedVertices[currentVertex];
        const adjacentVertices = currentVertex.adjacencyList;
        for(const [vertex, weight] of adjacentVertices){
            if(!visitedVertices[vertex]){
                unvisitedVertices[vertex] = vertex;
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
    let currentCheapestVertex = end;
    while(currentCheapestVertex.value  !== start.value){
        console.log(cheapestPath);
        cheapestPath.push(currentCheapestVertex);
        currentCheapestVertex = cheapestPreviousVertexTable[currentCheapestVertex];
    }
    cheapestPath.push(start);
    return cheapestPath.reverse();

}
const findCheapestPrice = (map, unvisitedVertices) => {
    let min = Infinity;
    let minKey = null;
    for(let key in map){
        if(unvisitedVertices[key] && map[key] < min){
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