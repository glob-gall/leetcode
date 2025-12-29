function maxOperations(nums: number[], k: number): number {
  let operations = 0;
  let seen: { [key: number]: number } = {};

  let rest: number;
  for (const num of nums) {
    if (seen[num] === undefined) seen[num] = 0;
    rest = k - num;

    if (seen[rest]) {
      seen[rest]--;
      operations++;
      // seen[num]--;
    } else seen[num]++;
  }

  return operations;
}

// maxOperations([3, 1, 3, 4, 3], 6);
maxOperations([3, 1, 3, 4], 6);
