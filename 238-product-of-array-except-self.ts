function productExceptSelf(nums: number[]): number[] {
  const len = nums.length
  const left:number[] = []
  const right:number[] = []

  left[0] = nums[0]
  right[len-1] = nums[len-1]

  for (let i = 1; i < len; i++) {
    left[i] = nums[i] * left[i-1]
    right[len-i-1] = nums[len-i-1] * right[len-i]
  }

  for (let i = 1; i < len-1; i++) {
    nums[i] = left[i-1] * right[i+1]
  }
  nums[len-1] = left[len-2]
  nums[0] = right[1]
  return nums
};

const nums = [1,2,3,4]

const result = productExceptSelf(nums)
console.log({result});

/** 
 * I | Left | Right
 * 1 |  1   |  5 
 * 2 |  2   |  4
 * 3 |  3   |  3
 * 4 |  4   |  2
 * 5 |  5   |  1
 * 6 |  6   |  0
 * */ 
