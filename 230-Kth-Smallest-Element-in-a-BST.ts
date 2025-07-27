import { TreeNode, makeTree } from './leetcode-helpers-ts/tree-helpers'

function kthSmallest(root: TreeNode | null, k: number): number {
  let stack:number[] = []

  function loop(node:TreeNode | null) {
    if(!node || stack.length > k) return
    
    loop(node.left)
    stack.push(node.val)
    loop(node.right)
  }
  loop(root)


  return stack[k-1]
};

// const tree = makeTree([1,0,48,null,null,12,49])
const tree = makeTree([236,104,701,null,227,null,911])

const resp = kthSmallest(tree,4)


console.log(resp);
