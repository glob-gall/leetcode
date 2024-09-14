// console.log(`[${i}]:${nums[i]} === [${i}]:${nums[i]} = ${nums[i] === nums[i-1]}`);
function removeDuplicates(nums: number[]): number {
  
  let i = 0;
  while (i < nums.length) {
    i++;

    if (nums[i] === nums[i-1]) {
      nums.splice(i,1)
      i--
    }
  }
  return nums.length
};

let nums = [1,1,2]
let resp = 0
resp = removeDuplicates(nums)
console.log({resp, nums});

nums = [0,0,1,1,1,2,2,3,3,4]
resp = removeDuplicates(nums)
console.log({resp, nums});

