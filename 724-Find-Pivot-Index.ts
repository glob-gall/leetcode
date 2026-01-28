function pivotIndex(nums: number[]): number {
  let left = 0;
  let right = 0;
  let i = 0;
  let total = 0;
  nums.forEach((num) => {
    total += num;
  });

  right = total;
  while (i < nums.length) {
    right = right - nums[i];
    if (right === left) return i;
    left += nums[i];
    i++;
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([0, 0])); // 0
console.log(pivotIndex([2, 1, -1])); // 0
