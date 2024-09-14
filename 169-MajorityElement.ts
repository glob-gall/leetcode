function printArray(name:string, array:any[]) {
  let stringArray = ''
  for (let i = 0; i < array.length; i++) {
    stringArray = stringArray + `${array[i]},`
  }
  console.log({[name]: stringArray});
  
}

function majorityElement(nums: number[]): number {
  let count:number[] = []

  let mostElements:number = nums[0]
  
  nums.forEach(num => {
    count[num] = count[num] ? count[num] + 1 : 1
    if (count[mostElements] < count[num]) {
      mostElements = num
    }
  })
  return mostElements
}


let nums = [3,2,3]
let resp = majorityElement(nums)
console.log({resp});


nums = [2,2,1,1,1,2,2]
resp = majorityElement(nums)
console.log({resp});

nums = [6,5,5]
resp = majorityElement(nums)
console.log({resp});
