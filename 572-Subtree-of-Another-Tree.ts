import {TreeNode, makeTree} from './leetcode-helpers-ts/tree-helpers'



function isSameTree(root1: TreeNode | null, root2:TreeNode | null): boolean {
  if(!root1 && !root2) return true
  else if (!root1) return false  
  else if (!root2) return false  

  if(root1.val !== root2.val) return false
  
  return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
}
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if(!root) return false
  if(!subRoot) return false

  
  if(isSameTree(root, subRoot)) return true
  return isSubtree( root.left, subRoot) || isSubtree( root.right, subRoot)

};



const root = makeTree([3,4,5,1,2])
const subRoot = makeTree([4,1,2])
const result = isSubtree(root,subRoot)
console.log(result);


const root2 = makeTree([1,1])
const subRoot2 = makeTree([1])
const result2 = isSubtree(root2,subRoot2)
console.log(result2);
