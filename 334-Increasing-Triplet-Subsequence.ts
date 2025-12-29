function increasingTriplet(nums: number[]): boolean {
  if (nums.length < 3) return false;

  let i = Infinity;
  let j = Infinity;
  let k = 0;

  while (k < nums.length) {
    if (nums[k] > j && j > i) return true;

    if (nums[k] <= i) {
      i = nums[k];
    } else if (nums[k] <= j) j = nums[k];
    k++;
  }

  return false;
}

// console.log(increasingTriplet([6, 8, 5, 6, 1, 2, 3]));
// console.log(increasingTriplet([6, 8, 5, 6, 1, 2]));
console.log(increasingTriplet([1, 2, 1, 3]));
// console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
