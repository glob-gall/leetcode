
class _Node {
    val: number
    children: _Node[]

    constructor(val?: number, children?: _Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.children = (children===undefined ? [] : children)
    }
}


function maxDepth(root: _Node | null, depth=0): number {
  if (!root) return 0  
    
  let deeper = 0

  function dfs(node: _Node,depth:number) {
    if (depth > deeper) deeper = depth  
    
    for (const child of node.children) {
      dfs(child, depth+1)
    }
  }
  dfs(root, 1)
  return deeper
};


// function maxDepth(root: _Node | null): number {
//   if (!root) return 0  

//   let max = 0
//   for (const child of root.children) {
//     max = Math.max(max, maxDepth(child))
    
//   }
//   return max +=1
// };