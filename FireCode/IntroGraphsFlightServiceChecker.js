class Solution {
	/**
	 * Takes in origin -> destination graph as
	 * an adjacency list, an origin and a destination
	 * and checks if a route is possible from the origin
	 * to the destination.
	 *
	 * @param {Map<string, Array<string>>} originDestinationsMap Graph as adjacency list.
	 * @param {string} origin Origin airport code.
	 * @param {string} destination Destination airport code.
	 * @return {boolean} True if a non-stop or connecting route exists.
	 */
	flightCheck(originDestinationsMap, origin, destination) {
	  	const visited = {};
		const queue = [];
	
		visited[origin] = true;
		queue.push(origin);
	
		while (queue.length) {
			const getQueueElement = queue.shift();
			console.log(getQueueElement);
	
			const getList = originDestinationsMap.get(getQueueElement);
	
			for (const i in getList) {
				const neigh = getList[i];
	
				if (!visited[neigh]) {
					visited[neigh] = true;
					queue.push(neigh);
				}
			}
		}
		return visited[destination] ? true : false;
	}
}

module.exports = Solution;


// top solutions
// class Solution {
// 	/**
// 	 * Takes in origin -> destination graph as
// 	 * an adjacency list, an origin and a destination
// 	 * and checks if a route is possible from the origin
// 	 * to the destination.
// 	 *
// 	 * @param {Map<string, Array<string>>} originDestinationsMap Graph as adjacency list.
// 	 * @param {string} origin Origin airport code.
// 	 * @param {string} destination Destination airport code.
// 	 * @return {boolean} True if a non-stop or connecting route exists.
// 	 */
// 	flightCheck(originDestinationsMap, origin, destination) {
// 	  const visited = new Set();
// 	  const queue = new Queue();
// 	  queue.enqueue(origin);
// 	  while (queue.nonEmpty()) {
// 		const airportCode = queue.dequeue();
// 		if (airportCode === destination) return true;
// 		if (!visited.has(airportCode)) {
// 		  visited.add(airportCode);
// 		  const destinations = originDestinationsMap.get(airportCode);
// 		  if (destinations !== undefined) destinations.forEach(dest => queue.enqueue(dest));
// 		}
// 	  }
// 	  return false;
// 	}
//   }
  
//   class Queue extends Array {
// 	enqueue(item) {
// 	  this.unshift(item);
// 	  return this;
// 	}
  
// 	dequeue() {
// 	  return this.pop();
// 	}
  
// 	nonEmpty() {
// 	  return this.length > 0;
// 	}
//   }
  
  
//   module.exports = Solution;