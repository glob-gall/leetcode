function isPerfectSquare(num: number): boolean {
  if(num === 1) return true
  
  let left = 1
  let right = num / 2

  let mean = 0
  while (left<=right) {
    
    mean = Math.floor((right + left) / 2)
    const sqr = mean * mean
    if(sqr === num) return true
    else if(sqr < num) left = mean + 1
    else right = mean - 1
  }

  return false
};

console.log(isPerfectSquare(2000105819));
