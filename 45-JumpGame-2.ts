

function jump(nums: number[]) {
  let steps:number[] = new Array(nums.length).fill(0);
  let curr = 0
  
  let queue:number[] = []
  while (curr !== nums.length-1) {
    
    const jump = Math.min(nums.length-1, curr+nums[curr])
    for(let i = jump; i > curr ;i--){
      if(steps[i] === 0) {
        steps[i] = steps[curr]+1
        queue.push(i)
      }  
    }
    const shift = queue.shift()
    if(!shift) return 0
    curr = shift
  }
  
  return steps[nums.length-1] 
};


// const nums = [2,3,0,1,4] // 2
// const nums = [2,3,1,1,4] // 2
const nums = [10,9,8,7,6,5,4,3,2,1,1,0]

console.log(jump(nums));

