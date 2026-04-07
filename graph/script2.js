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