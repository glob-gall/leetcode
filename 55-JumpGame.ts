function loop(nums: number[], check: boolean[], curr:number){
  if(curr === nums.length-1) return true;
  if(check[curr]) return false;
  check[curr] = true
  // console.log(`curr:${curr}`);
  
  const max = Math.min(nums.length-1, curr+nums[curr])
  // console.log(`max:${max}`);
  for(let i = max; i > curr ;i--){
      if (loop(nums,check,i)) return true  
  }

  const min = Math.max(0, curr - nums[curr])
  // console.log(`min:${min}`);
  for(let i = min; i < curr ;i++){
    if(loop(nums,check,i)) return true
  }

}

function canJump(nums: number[]): boolean {
  let check = new Array(nums.length).fill(0);
  return !!loop(nums,check,0)
};

const nums = [2,3,1,1,4] // true
// const nums = [3,2,1,0,4] // false
// const nums = [2,0] // true
// const nums = [2,5,0,0] // true

console.log(canJump(nums));
