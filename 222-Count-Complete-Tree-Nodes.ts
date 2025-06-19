import {makeTree,printTree,TreeNode} from './leetcode-helpers-ts/tree-helpers'


function countNodes(root: TreeNode | null): number {
  if (!root) return 0

  const left = countNodes(root.left)  
  const right = countNodes(root.right)  

  return left + right + 1
};

const root = makeTree([1,2,3,4,5,6])

const result = countNodes(root)

console.log(result);
