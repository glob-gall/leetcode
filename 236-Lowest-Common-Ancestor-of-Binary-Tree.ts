import {TreeNode,makeTree} from './leetcode-helpers-ts/tree-helpers'

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if(!root) return null
  
  let ancestor:TreeNode | null = null
  const loop = (node: TreeNode | null):boolean => {
    if(!node) return false
    
    const left = loop(node.left)
    const right = loop(node.right)
    console.log(node.val, left, right, {p:node === p, q:node === q});

    if (left && right && !ancestor) ancestor = node
    else if((node === p || node === q) && (left || right) && !ancestor) ancestor = node

    if(node === p) return true
    if(node === q) return true
    return left || right
  }
  loop(root)
  return ancestor
};


const node3 = new TreeNode(3)
const node5 = new TreeNode(5)
const node1 = new TreeNode(1)
const node6 = new TreeNode(6)
const node2 = new TreeNode(2)
const node0 = new TreeNode(0)
const node8 = new TreeNode(8)
const node7 = new TreeNode(7)
const node4 = new TreeNode(4)
node3.left = node5
node3.right = node1

node1.left = node0
node1.right = node8

node5.left = node6
node5.right = node2

node2.left = node7
node2.right = node4

// const root = makeTree([3,5,1,6,2,0,8,null,null,7,4])

const result = lowestCommonAncestor(node3,node5,node4)
console.log({result});




