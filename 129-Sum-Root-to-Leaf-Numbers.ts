import { makeTree, printTree, TreeNode,orderPrint } from './leetcode-helpers-ts/tree-helpers'


function sumNumbers(root: TreeNode | null): number {
  if(!root) return 0
  let sum=0
  const loop = (root: TreeNode | null,acc=0) => {
    if(!root) return;
    
    let cur = acc*10 + root.val
    
    if(!root.left && !root.right) sum += cur
    
    loop(root.left, cur)
    loop(root.right, cur)
  }
  loop(root)
  return sum
};


const tree = makeTree([4,9,0,5,1])
//const tree = makeTree([1,2,3])
printTree(tree


)
const result = sumNumbers(tree)
console.log(result);
