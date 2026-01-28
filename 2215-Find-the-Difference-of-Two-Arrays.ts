function findDifference(nums1: number[], nums2: number[]): number[][] {
  const map1 = new Set(nums1);
  const map2 = new Set(nums2);

  const arr1 = Array.from(map1).filter((n) => !map2.has(n));
  const arr2 = Array.from(map2).filter((n) => !map1.has(n));

  return [arr1, arr2];
}
