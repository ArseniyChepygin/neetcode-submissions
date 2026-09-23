class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = Array.from({ length: n }, () => []);
        let res = 0;

        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        };

        let visit = new Set();
        let dfs = function(node) {
            if (visit.has(node)) return false;

            visit.add(node);

            for (let neighbor of adj[node]) {
                dfs(neighbor);
            };

            return true;
        };

        for (let i = 0; i < n; i++) {
            if (dfs(i)) res++;
        };

        return res; 
    };
};
