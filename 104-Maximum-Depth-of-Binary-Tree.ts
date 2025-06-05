
import {printTree,makeTree} from './others/print-tree'
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}





function maxDepth(root: TreeNode | null, count=0): number {
  if(!root) return 0

  const leftCount  = maxDepth(root.left, count)
  const rightCount = maxDepth(root.right,count)

  return 1+Math.max(leftCount,rightCount)
};

// const root = makeTree([3,9,20,null,null,15,7])
const root = makeTree([3,9,20,null,null,15,7])
printTree(root)


const max = maxDepth(root)
console.log({max});
