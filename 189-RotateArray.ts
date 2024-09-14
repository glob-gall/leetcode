// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]


/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number) {
  if(k !== 0){
    nums.unshift(nums.pop() || 0)
    rotate(nums ,k-1)
  }
 };

const array1= [1,2,3,4,5,6,7]

console.log(array1)
rotate(array1, 3)
console.log(array1)