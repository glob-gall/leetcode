function twoSum(nums: number[], target: number): number[] {
  const keys: Object = {}

  let complement= 0
  let i = 0
  while(i < nums.length) {
    complement = target - nums[i]
    if(keys.hasOwnProperty(complement)) break
    
    keys[nums[i]] = i
    i++
  }

  return [keys[complement], i]
};

console.log(twoSum([2,7,11,15],9));
