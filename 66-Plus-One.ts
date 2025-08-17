function plusOne(digits: number[]): number[] {
    
  let rest = 1
  let index = digits.length-1
  while (index >= 0) {
    if(digits[index] === 9) {
      digits[index] = 0
      rest = 1
    }else if(digits[index] < 9){
      digits[index]+=rest
      rest = 0
      break
    }
    index--
  }
  if(digits[0] === 0) digits.unshift(1)  
  return digits
};

plusOne([1,2,3])
plusOne([1,8,9])
plusOne([9,9,9])
plusOne([8,9,9])
plusOne([9,0])