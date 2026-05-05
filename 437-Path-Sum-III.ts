import { TreeNode, makeTree } from "./leetcode-helpers-ts/tree-helpers";

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0;
  let sum = 0;

  const dfs = (node: TreeNode | null, memo: number[]) => {
    if (!node) return;
    let checkSum = node.val;

    if (checkSum === targetSum) sum += 1;
    for (let i = memo.length - 1; i >= 0; i--) {
      checkSum += memo[i];
      if (checkSum === targetSum) {
        sum += 1;
      }
    }
    console.log({ node, checkSum, memo, sum });

    dfs(node.left, [...memo, node.val]);
    dfs(node.right, [...memo, node.val]);
  };

  dfs(root, []);
  return sum;
}

// const node = makeTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]);
const node = makeTree([1]);

const result = pathSum(node, 1);

console.log({ result });
