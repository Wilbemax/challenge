/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minimumOperations = function(root) {
    const levels = [];
    const _traverse = (level, node) => {
        if (levels.length <= level) {
            levels.push([node.val]);
        }
        else {
            levels[level].push(node.val);
        }

        if (node.left) {
            _traverse(level + 1, node.left);
        }
        if (node.right) {
            _traverse(level + 1, node.right);
        }
    };
    _traverse(0, root);

    let res = 0;
    for (let i = 1; i < levels.length; i++) {
        const source = levels[i];
        if (source.length <= 1) { continue; }

        const sortMap = new Map();
        for (const [j, n] of source.toSorted((a, b) => a - b).entries()) {
            sortMap.set(n, j);
        }

        let k;
        for (let j = 0; j < source.length;) {
            if (j != (k = sortMap.get(source[j]))) {
                [source[j], source[k]] = [source[k], source[j]];
                res++;
            }
            else {
                j++;
            }
        }
    }
    return res;
};