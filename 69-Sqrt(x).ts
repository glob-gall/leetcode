function mySqrt(x: number): number {
  let left = 1
  let right = x

  
  let mid: number
  let sqr: number

  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    sqr = mid * mid
    if(sqr === x) return mid
    else if (sqr < x) left = mid + 1
    else right = mid - 1
  }

  return right
};

console.log(1,mySqrt(1));
console.log(2,mySqrt(2));
console.log(3,mySqrt(3));
console.log(4,mySqrt(4));
console.log(5,mySqrt(5));

console.log(8,mySqrt(8));
console.log(16,mySqrt(16));
console.log(64,mySqrt(64));
