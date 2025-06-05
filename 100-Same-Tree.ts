import {printTree,makeTree} from './leetcode-helpers-ts/tree-helpers'
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


function isSameTree(p: TreeNode | null, q: TreeNode | null,): boolean {
  if(!p) return !q
  if(!q) return !p
  if(p.val !== q.val) return false

  return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
};


const p = makeTree([1,2])
const q = makeTree([1,null,2])

const isSame = isSameTree(p,q)

printTree(p)
printTree(q)
console.log(isSame);
