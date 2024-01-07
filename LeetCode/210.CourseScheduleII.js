/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var findOrder = function (numCourses, prerequisites) {
    const graph = new Map(),
        visited = new Array(numCourses).fill(false),
        stack = new Array();

    for (const [v, e] of prerequisites) {
        if (graph.has(v)) {
            const values = graph.get(v);
            values.push(e);
            graph.set(v, values);
        } else {
            graph.set(v, [e]);
        }
    }

    for (let i = 0; i < numCourses; i++) {
        if (visited[i] === false && dfs(i, graph, visited, stack)) return [];
    }

    return stack;
};

const dfs = (index, graph, visited, stack) => {
    visited[index] = true;
    const edges = graph.get(index);

    if (edges) {
        for (const e of edges) {
            if (visited[e] == 1) return true;
            if (visited[e] == 0 && dfs(e, graph, visited, stack)) return true;
        }
    }

    visited[index] = null;
    stack.push(index);
    return false;
};