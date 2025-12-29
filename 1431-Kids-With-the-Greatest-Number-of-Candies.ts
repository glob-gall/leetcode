function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const greater = Math.max(...candies);
  return candies.map((c) => c + extraCandies >= greater);
}
