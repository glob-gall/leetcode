import {TreeNode,makeTree,printTree} from './leetcode-helpers-ts/tree-helpers'


function rightSideView(root: TreeNode | null): number[] {
  const values:number[] = []
  
  function treeLoop(node:TreeNode|null, depth: number) {
    if(!node) return
    
    values[depth] = node.val
    treeLoop(node.left,depth+1)
    treeLoop(node.right,depth+1)
  }
  treeLoop(root,0)
  
  return values
};

// const tree = makeTree([1,2,3,4,null,null,null,5])
//const tree = makeTree([1,null,3])
//  const tree = makeTree([1,2,3,null,5,6])
 const tree = makeTree([0,1,2,null,3,4,null,null,5,9,null,null,6,10,null])
 printTree(tree)

const resp = rightSideView(tree)

console.log(resp);