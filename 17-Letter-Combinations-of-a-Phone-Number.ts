const keyMapps = {
  '2': ['a','b','c'],
  '3': ['d','e','f'],
  '4': ['g','h','i'],
  '5': ['j','k','l'],
  '6': ['m','n','o'],
  '7': ['p','q','r','s'],
  '8': ['t','u','v'],
  '9': ['w','x','y','z'],
}
function letterCombinations(digits: string, pos:number = 0): string[] {
  if(digits.length === 0) return []
  const curr = digits[pos]

  if(pos === digits.length-1) return keyMapps[curr]
  
  const combinations:string[] = []
  
  for (const key of keyMapps[curr]) {
    
    const tempCom = letterCombinations(digits, pos+1)
    for (const el of tempCom)
        combinations.push(key+el)
    
  }
  return combinations
};

const result = letterCombinations("")

console.log(result);
