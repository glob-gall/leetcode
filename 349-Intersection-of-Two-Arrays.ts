function intersection(nums1: number[], nums2: number[]): number[] {
  const all1 = new Set(nums1)
  const all2 = new Set(nums2)

  let intersection:number[] = []

  for(const element of all2) {
    if(all1.has(element)) intersection.push(element)
  }

  return intersection
};

console.log(intersection([4,9,5], [9,4,9,8,4]));
