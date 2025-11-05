function search(nums: number[], target: number): number {
  if (nums.length === 1) return nums[0] === target ? 0 : -1  
  
  let left = 0
  let right = nums.length-1

  let mid = 0
  while (left <= right) {
    mid = Math.floor((left+right)/2)
    if(nums[mid] < nums[right]) right = mid
    else left = mid + 1
  }

  const shift = right
  left = 0
  right = nums.length-1  
  
  let midShifted=0
  while (left <= right) {
    
    mid = Math.floor((left+right)/2)
    midShifted = (mid + shift) % nums.length    
    if(nums[midShifted] === target) {
      return  midShifted
    }
    else if(nums[midShifted] < target) left = mid +1
    else right = mid -1
  }
  
  return -1
};


// 
// function search(nums: number[], target: number): number {
//   return nums.indexOf(target)
// }
// 
// 

