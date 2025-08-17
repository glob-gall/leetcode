function climbStairs(n: number): number {
  const memo = Array(n).fill(0)
  memo[0]=1
  memo[1]=2

  let i = 2
  while (i < n) {
      memo[i] = memo[i-1]+ memo[i-2]
    i++
  }

  return memo[n-1]
};

console.log(climbStairs(8));
