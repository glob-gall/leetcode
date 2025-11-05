function intersect(nums1: number[], nums2: number[]): number[] {
  const hash: {[key:number]: number} = {}
  const response: number[] = []

  for (let i = 0; i < nums1.length; i++) {
    if(!hash[nums1[i]]) hash[nums1[i]] = 0
    hash[nums1[i]] +=1
  }
    
  for (let i = 0; i < nums2.length; i++) {
    if(hash[nums2[i]]) {
      response.push(nums2[i])
      hash[nums2[i]]-=1
    }
  }
  
  return response
};


const result = intersect([1,2,2,1],[2,2])
console.log(result)