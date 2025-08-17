function searchInsert(nums: number[], target: number): number {
  if (nums[0] >= target) return 0   
  if (nums[nums.length-1] < target) return nums.length   
    
  function searchRecursion(left: number, right:number) {
    if(left > right) return right
    const posi = Math.floor((left + right) / 2)
    if(nums[posi] < target) return searchRecursion(posi+1, right)
    return searchRecursion(left, posi-1)
  }

  return searchRecursion(0, nums.length-1)
};