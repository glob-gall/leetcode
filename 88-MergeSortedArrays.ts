/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i1 = m-1
  let i2 = n-1
  let i  = m+n-1

  while (i2>=0) {
    if (nums1[i1] >= nums2[i2]) {
      nums1[i] = nums1[i1]
      i1--
    }else {
      nums1[i] = nums2[i2]
      i2--
    }
    i--
  }
};

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;
merge(nums1, m, nums2, n)
console.log(nums1);

nums1 = [1];
m = 1;
nums2 = [];
n = 0;
merge(nums1, m, nums2, n)
console.log(nums1);

nums1 = [0];
m = 0;
nums2 = [1];
n = 1;
merge(nums1, m, nums2, n)
console.log(nums1);


