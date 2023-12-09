/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const preMap = {};
    const visited = {};

    for (let i = 0; i < prerequisites.length; i++) {
        if (!preMap[prerequisites[i][0]]) {
            preMap[prerequisites[i][0]] = [prerequisites[i][1]];
        } else {
            preMap[prerequisites[i][0]].push(prerequisites[i][1]);
        }
    }

    console.log(preMap);

    for (let key in preMap) {
        if (!dfs(key, preMap, visited)) {
            return false;
        }
    }
    return true;
};

const dfs = (node, preMap, visited) => {
    if (visited[node]) {
        return false;
    }

    if (preMap[node]) {
        if (!preMap[node].length) {
            return true;
        }

        visited[node] = true;
        for (const val of preMap[node]) {
            if (!dfs(val, preMap, visited)) {
                return false;
            }
        }

        visited[node] = false;

        preMap[node] = [];
    }

    return true;
};