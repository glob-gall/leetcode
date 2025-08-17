function singleNumber(nums: number[]): number {
  let visited = new Set<number>()
  let unique = new Set<number>()

  for (let i = 0; i < nums.length; i++) {
    if(visited.has(nums[i])) {
      unique.delete(nums[i])
    } else {
      unique.add(nums[i])
      visited.add(nums[i])
    }
  }

  return Array.from(unique)[0]
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));
// console.log(singleNumber());
