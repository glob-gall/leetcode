function isPalindrome(x: number): boolean {
  if (x < 0) return false

  const stringNumber: string = x.toString()
  let left = 0
  let right = stringNumber.length-1

  while (left < right) {
    if (stringNumber[left] !== stringNumber[right]) return false  
    
    left+=1
    right-=1
  }
  return true
};