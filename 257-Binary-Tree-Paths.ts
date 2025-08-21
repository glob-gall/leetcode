
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function binaryTreePaths(root: TreeNode | null): string[] {
  if(!root) return []
  if (!root.left && !root.right) return [`${root.val}`]  
  
  let paths:string[] = []
  

  function dfs(node: TreeNode, path: string) {
    const cur = path + "->" + node.val
    if(node.left) dfs(node.left, cur)
    if (node.right) dfs(node.right, cur)
      
    if(!node.left && !node.right) paths.push(cur)
  }

  if(root.right) dfs(root.right, root.val.toString())
  if(root.left) dfs(root.left, root.val.toString())
  return paths
}

const node1 = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node5 = new TreeNode(5)

node1.left = node2
node1.right = node3
node2.right = node5


console.log(binaryTreePaths(node1));

