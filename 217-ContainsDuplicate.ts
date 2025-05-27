function containsDuplicate(nums: number[]): boolean {
  let keys: {[k:string]: boolean} = {}

  for (let i = 0; i < nums.length; i++) {
    if(keys[nums[i]]) return true
    keys[nums[i]] = true
  }
  return false
};


// const result = containsDuplicate([1,2,3,1])
const result = containsDuplicate([1,2,3,4])
// const result = containsDuplicate([1,1,1,3,3,4,3,2,4,2])


console.log({result});
