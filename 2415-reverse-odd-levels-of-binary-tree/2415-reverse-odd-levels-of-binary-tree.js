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
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
    if (!root) return null;
    // Helper function for DFS traversal
    traverseDFS(root.left, root.right, 1); // Start at level 1
    return root;
}

function traverseDFS(leftChild, rightChild, level) {
    if (!leftChild || !rightChild) return;

    // If the level is odd, swap the values of the nodes
    if (level % 2 === 1) {
        let temp = leftChild.val;
        leftChild.val = rightChild.val;
        rightChild.val = temp;
    }

    // Recurse for the next level
    traverseDFS(leftChild.left, rightChild.right, level + 1);
    traverseDFS(leftChild.right, rightChild.left, level + 1);
};