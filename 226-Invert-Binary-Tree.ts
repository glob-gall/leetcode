import {TreeNode,makeTree,printTree} from './leetcode-helpers-ts/tree-helpers'

function invertTree(root: TreeNode | null): TreeNode | null {
    if(!root) return null

    const aux = root.left
    root.left = root.right
    root.right = aux

    invertTree(root.left)
    invertTree(root.right)

    return root
};


const tree = makeTree([4,2,7,1,3,6,9])

printTree(tree)

invertTree(tree)

printTree(tree)
