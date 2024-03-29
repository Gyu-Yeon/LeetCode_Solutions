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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];

    /*
    RECURSIVE SOLUTION

    function inorder(root) {
        // if node null, return back to the prenode (works like that with recursive functions)
        if (!root) {
            return;
        }

        inorder(root.left);    // recursive call for left nodes
        result.push(root.val); // push to result   
        inorder(root.right);   // when its done with left, start right

    }
    // call recursive function
    inorder(root);
    return result;
    */


    // ITERATIVE SOLUTION 

    // The call stack, which we can return to the parent node and decide if there is something to do left
    let stack = [];
    // The pointer on the current node
    let currentNode = root;

    while (currentNode || stack.length) {
        // this loop is going down the left nodes and exits if there is no left node anymore. Also adds all nodes to Stack
        if(currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        } else {
// finishing the above loop, it means we are at the deepest left node we could get and all ar added, so now we need to point the currentNode to the parentNode. We do this by popping the last item in our callstack, which was the parentNode. pop returns the last item, currentNode is now the last Item (Parent)
        currentNode = stack.pop()
// We add currentNode to the result, because inorder traversal is ""left-root-right"-order", so we always add the most left node which is left (and has no left children)
        result.push(currentNode.val);
// then we point the pointer to the right node (even if its null)
        currentNode = currentNode.right;
        
// After we were at the deepest left, a new outer while loop is started, where is checked if currentNode exists, if yes, add to stack, move left. if not, set currentNode/pointer to parent, push it to result and set to right child node.
        }
            
    }

    return result;
};