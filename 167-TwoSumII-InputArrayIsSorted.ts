function twoSum(numbers: number[], target: number): number[] {
  let a = 0
  let b = numbers.length-1
  
  while (true) {    
      if((numbers[a] + numbers[b]) < target){
        a+=1
      }else if((numbers[a] + numbers[b]) > target){
        b-=1
      } else {
        break
      }
  }

  return [a+1,b+1]
};


// const numbers = [0,0,3,4]
// const target = 0 // [1,2]

// const numbers = [-10,-8,-2,1,2,5,6]
// const target = 0 //[3,5]

const numbers = [2,7,11,15]
const target = 9 // [1, 2]


// const numbers = [2,7,8,9]
const result = twoSum(numbers,target)

console.log({result});
