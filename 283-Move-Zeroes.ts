
 function moveZeroes(nums: number[]): void {
  let last = nums.length-1
  let i = 0
  while (i<=last) {
    if (nums[i] === 0) {
      nums[i] = nums[last]
      nums[last] = 0
      last-=1
    } 
    i+=1
  }

}