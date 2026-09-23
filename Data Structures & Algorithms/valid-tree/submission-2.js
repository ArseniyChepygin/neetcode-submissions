class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length > n - 1) {
            return false;
        };

        let adj = Array.from({ length: n }, () => []);
        for (let [one, two] of edges) {
            adj[one].push(two);
            adj[two].push(one);
        };

        let visit = new Set();
        const dfs = function(node, parent) {
            if (visit.has(node)) {
                return false
            };

            visit.add(node);
            for (let neighbor of adj[node]) {
                if (parent === neighbor) {
                    continue;
                };

                if (!dfs(neighbor, node)) {
                    return false;
                };
            };
            return true;
        };

        return dfs(0, -1) && visit.size === n;
    };
}
