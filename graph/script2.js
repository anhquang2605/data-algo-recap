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
    unvisitedVertices[start.value] = start;
    cheapeestPriceTable[start.value] = 0;
    let currentVertex = start;
    //issue right now, the current vertex need to be an actual vertex. at the end of the while loop, we need to asign the vertex node not the vertex value to the current vertex.
    while(currentVertex){
        visitedVertices[currentVertex.value] = currentVertex;
        delete unvisitedVertices[currentVertex.value];
        const adjacentVertices = currentVertex.adjacencyList;
        for(const [vertex, weight] of adjacentVertices){
            const vertexValue = vertex.value;
            if(!visitedVertices[vertexValue]){
                unvisitedVertices[vertexValue] = vertex;
                const priceToAdjacentVertex = cheapeestPriceTable[currentVertex.value] + weight;
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
const findCheapestPrice = (map, unvisitedVertices) => {
    let min = Infinity;
    let minItem = null;
    for(let key in map){
        let item = unvisitedVertices[key];
        let price = map[key];
        if(item && price < min){
            min = price;
            minItem = item;
        }
    }
    return minItem;
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
alanta.addAdjacent(denver, 160);
boston.addAdjacent(chicago, 120);
boston.addAdjacent(denver, 180);
chicago.addAdjacent(elPaso, 80);
denver.addAdjacent(chicago, 40);
denver.addAdjacent(elPaso, 140);
elPaso.addAdjacent(boston, 100);

console.log(djikstra(alanta, elPaso));