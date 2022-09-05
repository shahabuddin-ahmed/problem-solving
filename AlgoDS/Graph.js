class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.adjList = new Map();
    }
 
    addVertex(v) {
		this.adjList.set(v, []);
	}

    addEdge(v, w) {
		this.adjList.get(v).push(w);
		// this.adjList.get(w).push(v); // this line only applicable for bidirectional nodes
	}

    printGraph() {
		const getKeys = this.adjList.keys();
		for (const getKey of getKeys) {
			const getValues = this.adjList.get(getKey);
			let conc = "";
			for (const getValue of getValues)
				conc += getValue + " ";
			console.log(getKey + " -> " + conc);
		}
	}
 
    bfs(origin, destination) {
		const visited = {};
		const queue = [];
	
		visited[origin] = true;
		queue.push(origin);
	
		while (queue.length) {
			const getQueueElement = queue.shift();
	
			const getList = this.adjList.get(getQueueElement);
	
			for (const _getList in getList) {
				const neigh = getList[_getList];
	
				if (!visited[neigh]) {
					visited[neigh] = true;
					queue.push(neigh);
				}
			}
		}
		return visited[destination] ? true : false;
	}

    dfs(v) {

	}
}

const graph = new Graph(6);
const vertices = ["A", "B", "C", "D", "E", "F"];

for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}
 
// adding edges
graph.addEdge("A", "B");
graph.addEdge("A", "D");
graph.addEdge("A", "E");
graph.addEdge("B", "C");
graph.addEdge("D", "E");
graph.addEdge("E", "F");
graph.addEdge("E", "C");
graph.addEdge("C", "F");
 
// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
graph.printGraph();
const bfs = graph.bfs("A", "F");
console.log(bfs);