function removeElement(nums: number[], val: number): number {

  let i = 0;
  let j = nums.length;

  while (i!==j) {
    if (nums[i] !== val) {
      i++;
    } else {
      nums[i] = nums[j-1];
      j--;
    }
  }

  return i
};

let nums = [3,2,2,3]; 
let val = 3;
let output = removeElement(nums, val)
console.log({nums,output});

nums = [0,1,2,2,3,0,4,2];
val = 2
output = removeElement(nums, val)
console.log({nums, output});

