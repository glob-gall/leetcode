function summaryRanges(nums: number[]): string[] {
  if (!nums.length) return []  
  const intervals:string[] = []

    let first = nums[0]
    let last = nums[0]

    for (let i = 1; i < nums.length; i++) {
      console.log(first,last,nums[i]);
      
      if(nums[i] === nums[i-1]+1){
        last=nums[i]
      } else {
        if(first===last) intervals.push(''+first)
        else intervals.push(`${first}->${last}`)
        first = nums[i]
      }
    last = nums[i]
  }
  if(first === nums[nums.length-1]) intervals.push(`${first}`)
  else intervals.push(`${first}->${last}`)
  return intervals
};

const nums = [-5,0,1,2,4,6,7,8]
// const nums = [-5,0,1,2,4,6,7,14]

const result = summaryRanges(nums)

console.log({result});
