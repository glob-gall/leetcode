import {TreeNode,makeTree,printTree} from './leetcode-helpers-ts/tree-helpers'


function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true

  const loop = (node1: TreeNode | null, node2: TreeNode | null): boolean => {  
    if (!node1 && !node2) return true
    if(!node1 || !node2) return false
    
    const left = loop(node1.left, node2.right)
    const right = loop(node1.right, node2.left)

    return (node1.val === node2.val) && left && right 
  }  

  return loop(root.left, root.right)
};

const tree = makeTree( [1,2,2,null,3,null,3 ] )
printTree(tree)
const result = isSymmetric(tree)
console.log(result);


