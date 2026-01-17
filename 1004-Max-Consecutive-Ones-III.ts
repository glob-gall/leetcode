function longestOnes(nums: number[], k: number): number {
  let longest = 0;

  let startI = 0;
  let lastI = 0;
  let curK = 0;

  let curLen = 0;
  while (lastI < nums.length) {
    if (nums[lastI] === 1) lastI++;
    else if (curK < k) {
      lastI++;
      curK++;
    } else if (nums[startI] === 0) {
      startI++;
      curK--;
    } else startI++;

    curLen = lastI - startI;
    if (curLen > longest) longest = curLen;
    console.log(`[${startI}-${lastI}]: cur:${curK} long: ${longest}`);
  }

  return longest;
}

// longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
longestOnes([0, 0, 0, 1], 3);
