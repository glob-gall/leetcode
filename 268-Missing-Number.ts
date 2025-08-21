function missingNumber(nums: number[]): number {
  let sum = 0  
  for (let i = 0; i < nums.length; i++) 
    sum += (i+1) - nums[i] 
    

  return sum
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
console.log(missingNumber([0,2,3]));
