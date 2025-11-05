function longestPalindrome(s: string): number {
  const hash: {[key:string] : number } = {}
  for (let i = 0; i < s.length; i++) {
    if(!hash[s[i]]) hash[ s[i] ] = 0
    hash[s[i]] +=1
    
  }
  
  let len = 0
  let hasOdd = false
  for (let [key, value]  of Object.entries(hash)) {
    len+= value
    if(value % 2 === 1) {
      len += -1
      hasOdd=true

    }
  }
  if(hasOdd) len+=1

  return len
};


const result = longestPalindrome('abccccdd')
console.log({ result });
