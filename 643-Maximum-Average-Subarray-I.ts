// [0,4,0,3,2]
function findMaxAverage(nums: number[], k: number): number {
  let max = 0;
  let i: number;
  for (i = 0; i < k; i++) max += nums[i];

  let slider = max;
  while (i < nums.length) {
    slider = slider - nums[i - k] + nums[i];
    if (slider > max) max = slider;

    i++;
  }

  return max / k;
}

findMaxAverage([1, 12, -5, -6, 50, 3], 4);
// findMaxAverage([5], 1);
// findMaxAverage([0, 4, 0, 3, 2], 1);
