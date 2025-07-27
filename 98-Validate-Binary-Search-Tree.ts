import { TreeNode, makeTree } from './leetcode-helpers-ts/tree-helpers'

function isValidBST(root: TreeNode | null): boolean {
  if(!root) return true

  let stack:number[] = []


  function loop(node:TreeNode | null) {
    if(!node) return
    
    loop(node.left)
    stack.push(node.val)
    loop(node.right)
  }
  loop(root)

  let i=1
  while (i < stack.length) {
    if (stack[i-1] >= stack[i]) return false 
    i++
  }

  return true
};

// const tree = makeTree([1,0,48,null,null,12,49])
const tree = makeTree([236,104,701,null,227,null,911])

const resp = isValidBST(tree)


console.log(resp);
