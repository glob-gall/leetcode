function moveZeroes(nums: number[]): void {
  let i = 0;
  let lastNum = 0;

  while (i < nums.length) {
    if (nums[i] !== 0) {
      nums[lastNum] = nums[i];
      if (lastNum !== i) nums[i] = 0;
      lastNum++;
    }

    i++;
  }
}

// let nums = [0, 0, 1];
let nums = [1];
let result = moveZeroes(nums);

console.log(nums);
