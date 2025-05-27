function findTheDifference(s: string, t: string): string {  
  let i:number

  let charCount: {[k:string]: number} = {}
  for (i = 0; i < s.length; i++){
    if(!charCount[s[i]]) charCount[s[i]] = 1
    else charCount[s[i]] +=1
  }

  for (i = 0; i < t.length; i++) {
    if(!charCount[t[i]]) return t[i]
    charCount[t[i]]-=1
  }
  return t[i]
};