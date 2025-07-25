import {TreeNode,makeTree,printTree} from './leetcode-helpers-ts/tree-helpers'


function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const zigzag: number[][] = []  
  function loop(node: TreeNode | null, depth:number){
    if(!node) return
    if(!zigzag[depth]) zigzag[depth] = [node.val]
    else if (depth % 2 ===0) zigzag[depth] = [node.val, ...zigzag[depth]]
    else zigzag[depth].push(node.val)

    loop(node.right,depth+1)
    loop(node.left,depth+1)
  }

  loop(root,0)

  return zigzag
};

const tree = makeTree([1,2,3,4,null,null,5])

const result = zigzagLevelOrder(tree)
console.log(result);
