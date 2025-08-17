
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


function isBalanced(root: TreeNode | null): boolean {
  let result = true
  function loop(node: TreeNode | null): number {
    if(!node || !result) return 0

    const left = loop(node.left)
    const right = loop(node.right)
    if(Math.abs(left-right) >= 2 ) result = false

    let bigger = left
    if (right > left)   bigger = right

    return bigger + 1
  }
  loop(root)

  return result
};

const node3 = new TreeNode(3)
const node9 = new TreeNode(9)
const node20 = new TreeNode(20)
const node15 = new TreeNode(15)
const node7 = new TreeNode(7)
node3.left = node9
node3.right = node20

node20.left = node15
node20.right = node7

isBalanced(node3)