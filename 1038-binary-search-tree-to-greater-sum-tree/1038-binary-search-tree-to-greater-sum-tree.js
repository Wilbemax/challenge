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
var bstToGst = function(root) {
  
    let data = [];
    function traverse(node) {
        if(node.left) traverse(node.left)
        data.push(node)
        if(node.right) traverse(node.right)

    }

    traverse(root)

    let sum = 0;
    for(i = 0; i < data.length; i++){
        sum = sum + data[i].val
    }
    
    let sumLeft = 0
    for(let i = 0; i < data.length; i++){
        let current = data[i].val
        data[i].val = sum - sumLeft;
        sumLeft = sumLeft + current

    }

    return root  
};