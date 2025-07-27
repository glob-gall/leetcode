import { TreeNode, makeTree } from './leetcode-helpers-ts/tree-helpers'

function getMinimumDifference(root: TreeNode | null): number {
  let stack:number[] = []

  function loop(node:TreeNode | null) {
    if(!node) return
    
    loop(node.left)
    stack.push(node.val)
    loop(node.right)
  }
  loop(root)

  let min = Number.MAX_SAFE_INTEGER
  let i = 1
  
  while ( i < stack.length ) {
    let cur = stack[i] - stack[i-1]
    if(min > cur) min = cur  
    i++
  }

  return min
};

// const tree = makeTree([1,0,48,null,null,12,49])
const tree = makeTree([236,104,701,null,227,null,911])

const resp = getMinimumDifference(tree)


console.log(resp);
