function search(nums: number[], target: number): boolean {
  const hash =new Set(nums)
  return hash.has(target)
}
