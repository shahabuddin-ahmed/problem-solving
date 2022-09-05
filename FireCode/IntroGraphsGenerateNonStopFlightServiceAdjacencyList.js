class Solution {
	/**
	 * Takes in a nested list of origin, destination pairs and
	 * returns an adjacency list containing mappings of
	 * origin -> list of non-stop destinations reachable from the origin.
	 *
	 * @param {Array<Array<string>>} originDestinations Nested list
	 * of origin, destination pairs.
	 * @return {Map<string, Array<string>>} Graph as adjacency list.
	 */
	graphAdjacencyList(originDestinations) {
		const adjList = new Map();
		
		originDestinations.forEach(element => {
			this.addEdge(element[0], element[1], adjList);
		});

		return adjList;
	}

	addEdge(v, w, adjList) {
		if (!adjList.get(v)) {
			adjList.set(v, []);
		}

		if (!adjList.get(v).filter(value => value === w)[0]) {
			adjList.get(v).push(w);
		}
	}
}

module.exports = Solution;