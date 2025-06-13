import { makeTree, printTree, TreeNode,orderPrint } from './leetcode-helpers-ts/tree-helpers'

// const root = makeTree([1,2,5,3,4,null,6])

// printTree(root)



/**
 Do not return anything, modify root in-place instead.
 
 */
function flatten(root: TreeNode | null) {
  if(!root) return
  
  const flattenLoop = (node: TreeNode | null): TreeNode | null => {
    if(!node) return null    

    const left = flattenLoop(node.left)
    let right = flattenLoop (node.right)

    if(left) {
      left.right = node.right
      left.left = null
      node.right = node.left
      node.left = null
    }
    
    return right ?? left ?? node
  }

  
  flattenLoop(root)
}



// const root = makeTree([1,2,5,3,4,null,6])
const root = makeTree([1,2,17,3,10,18,25,4,7,11,14,19,22,26,29,5,6,8,9,12,13,15,16,20,21,23,24,27,28,30,31])

// const root = makeTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])

printTree(root)
flatten(root)
// orderPrint(root,'POSORDER')
// orderPrint(root,'INORDER')
// orderPrint(root,'POSORDER')
// printTree(root)
