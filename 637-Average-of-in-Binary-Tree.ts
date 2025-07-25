import {TreeNode,makeTree} from './leetcode-helpers-ts/tree-helpers'


function averageOfLevels(root: TreeNode | null): number[] {

  let lvlQnt: number[] = []
  let lvlTotal: number[] = []

  function avgLvlLoop(node: TreeNode | null, lvl: number) {
    if(!node) return
    lvlQnt[lvl] = lvlQnt[lvl] ? lvlQnt[lvl] + 1 : 1
    lvlTotal[lvl] = lvlTotal[lvl] ? lvlTotal[lvl] + node.val : node.val
    
    avgLvlLoop(node.left,  lvl + 1)
    avgLvlLoop(node.right, lvl + 1)
  }
  avgLvlLoop(root,0)


  return lvlTotal.map((total,i) => total/ lvlQnt[i])
};


const tree = makeTree([3,9,20,null,null,15,7])

const totais = averageOfLevels(tree )

console.log(totais);
