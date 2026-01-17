function longestSubarray(nums: number[]): number {
  let longest = 0;

  let startI = 0;
  let endI = 0;
  let deleteOneAnyway = true;

  let deleted: number | null = null;

  let curSize = 0;
  while (endI < nums.length) {
    if (nums[endI] === 0) {
      deleteOneAnyway = false;
      if (deleted) {
        startI = deleted + 1;
        curSize = endI - startI;
      }
      deleted = endI;
    } else curSize++;
    if (nums[startI] === 0) startI++;

    if (curSize > longest) longest = curSize;
    endI++;
  }

  if (deleteOneAnyway) longest--;
  return longest;
}

console.log(longestSubarray([1, 1, 1])); //2
console.log(longestSubarray([1, 1, 1, 0, 1])); //4
console.log(longestSubarray([1, 1, 0, 0, 1])); //2
console.log(longestSubarray([1, 0])); //1
console.log(longestSubarray([0])); //0
console.log(longestSubarray([1, 1, 0, 0, 1])); //2
console.log(longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1])); //4
