/**
 * @param {number[]} data
 * @param {number} curDist
 * @param {number} node
 * @param {number} parent
 * @param {number[][]} adj
 */
function dfs(data, curDist, node, parent, adj) {
    if(data[0] < curDist) {
        data[0] = curDist;
        data[1] = node;
    }

    for(let nei of adj[node]) {
        if(nei !== parent) {
            dfs(data, curDist + 1, nei, node, adj);
        }
    }
}

/**
 * @param {number} n
 * @param {number[][]} adj
 * @return {number}
 */
function getDiameter(n, adj) {
    // data[0] -> maxDist, data[1] -> fathest node with maxDist from the root
    let data = new Int32Array(2);
    dfs(data, 0, 0, -1, adj);
    dfs(data, 0, data[1], -1, adj);
    return data[0];
}


/**
 * @param {number} n
 * @param {number[][]} adj
 * @param {number[][]} edges
 */
function buildGraph(n, adj, edges) {
    for(let i = 0; i < n; i++) {
        adj.push([]);
    }

    for(let [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
}

/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function(edges1, edges2) {
    let adj1 = [], adj2 = [];
    let n = edges1.length + 1;
    let m = edges2.length + 1;
    buildGraph(n, adj1, edges1);
    buildGraph(m, adj2, edges2);
    
    let diag1 = getDiameter(n, adj1);
    let diag2 = getDiameter(m, adj2);
    return Math.max(diag1, Math.max(diag2, 1 + Math.ceil(diag1/2) + Math.ceil(diag2/2)));
};