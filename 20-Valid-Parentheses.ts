function isValid(s: string): boolean {
  let openners = {
    '(':true,
    '{':true,
    '[':true
  }
  let pairs = {
    '}':'{',
    ']':'[',
    ')':'(',
  }
  if(s.length < 2) return false
  
  let stack:string[] = []

  for (let i = 0; i < s.length; i++) {
    let current = s.charAt(i)
    if (openners[current]){
      stack.push(current)
      continue
    } 

    const head = stack.pop()
    if(pairs[current] !== head ) return false
  }

  return stack.length === 0    
};

const s = "()[]{}"

const result = isValid(s)
console.log(result);
