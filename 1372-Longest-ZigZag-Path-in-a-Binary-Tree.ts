import { TreeNode } from "./leetcode-helpers-ts/tree-helpers";

function longestZigZag(root: TreeNode | null): number {
  let result = 0;
  function dfs(root: TreeNode | null, left: number, right: number) {
    if (!root) return;
    result = Math.max(result, left, right);

    dfs(root.left, right + 1, 0);
    dfs(root.right, 0, left + 1);
  }

  dfs(root, 0, 0);

  return result;
}
