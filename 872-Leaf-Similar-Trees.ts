import { TreeNode } from "./leetcode-helpers-ts/tree-helpers";

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const sequence: number[] = [];
  const leafLoop = (root: TreeNode | null) => {
    if (!root) return;
    if (!root.left && !root.right) {
      sequence.push(root.val);
    }
    leafLoop(root.left);
    leafLoop(root.right);
  };
  leafLoop(root1);

  let i = 0;
  const leafLoop2 = (root: TreeNode | null): boolean => {
    if (!root) return true;
    if (!root.left && !root.right) {
      if (sequence[i] !== root.val) return false;
      i++;
    }
    return leafLoop2(root.left) && leafLoop2(root.right);
  };
  const result = leafLoop2(root2);
  return sequence.length === i && result;
}

const first1 = new TreeNode(1);
const first2 = new TreeNode(2);
const first3 = new TreeNode(3);
const first4 = new TreeNode(4);
const first5 = new TreeNode(5);
const first6 = new TreeNode(6);
const first7 = new TreeNode(7);
const first8 = new TreeNode(8);
const first9 = new TreeNode(9);

first1.left = first2;
first1.right = first3;

first2.left = first4;

first4.left = first5;
first4.right = first6;

first3.right = first9;
first9.left = first7;
first9.right = first8;

const second1 = new TreeNode(1);
const second2 = new TreeNode(2);
const second3 = new TreeNode(3);
const second4 = new TreeNode(4);
const second5 = new TreeNode(5);
const second6 = new TreeNode(6);
const second7 = new TreeNode(7);
const second8 = new TreeNode(8);
const second9 = new TreeNode(9);

second1.left = second2;
second1.right = second3;

second2.right = second4;

second4.left = second9;
second4.right = second7;

second9.left = second5;
second9.right = second6;

second3.right = second8;

leafSimilar(first1, second1);
