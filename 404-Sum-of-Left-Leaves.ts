import {makeTree, TreeNode} from './leetcode-helpers-ts/tree-helpers'




function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0

  let sum = 0
  function dfs(node: TreeNode, isLeft = false) {
    if (!node.left && !node.right && isLeft) sum += node.val
    
    if (node.left) dfs(node.left, true)   
    if (node.right) dfs(node.right, false)   
  }

  dfs(root)
  return sum 
};



const root = makeTree( [3,9,20,null,null,15,7] )

console.log(sumOfLeftLeaves(root))