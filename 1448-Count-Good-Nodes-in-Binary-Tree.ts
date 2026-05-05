import { TreeNode, makeTree } from "./leetcode-helpers-ts/tree-helpers";

function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;
  let count = 0;

  function counter(node: TreeNode, bigger: number) {
    if (node.val >= bigger) {
      count += 1;
      bigger = node.val;
    }

    if (node.left) counter(node.left, bigger);
    if (node.right) counter(node.right, bigger);
  }
  counter(root, root.val);

  return count;
}

const tree = makeTree([2, null, 4, 10, 8, null, null, 4]);

goodNodes(tree);
