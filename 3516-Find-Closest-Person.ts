function findClosest(x: number, y: number, z: number): number {
  const diff  = Math.abs(x-z) - Math.abs(y-z)

  if(diff === 0) return 0
  return diff < 0 ? 1 : 2
};