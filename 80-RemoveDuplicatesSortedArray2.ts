// console.log(`[${i}]:${nums[i]} === [${i}]:${nums[i]} = ${nums[i] === nums[i-1]}`);
function removeDuplicates(nums: number[]): number {
  
  let i = 0;
  let count = 0;
  while (i < nums.length) {
    i++

    if (nums[i] === nums[i-1]) {
      count++
      if (count > 1) {
        i--
        nums.splice(i,1)
      }
    }else {
      count = 0
    }
  }
  return nums.length
};

let nums = [1,1,1,2,2,3]
let resp = 0
resp = removeDuplicates(nums)
console.log({resp, nums});

nums = [0,0,1,1,1,1,2,3,3]
resp = removeDuplicates(nums)
console.log({resp, nums});

