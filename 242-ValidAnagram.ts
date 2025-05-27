function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false  
  const keys: {[K:string]:number} = {}
  
  let i= 0
  for (i = 0; i < s.length; i++) {
    if(keys[s[i]]) {
      keys[s[i]] +=1
      continue
    }
    keys[s[i]] = 1
  }

  for (i = 0; i < t.length; i++) {
    if(!keys[t[i]]) return false
    else if(keys[t[i]] === 0) return false
    keys[t[i]]-=1
  }
  return true
};

// const result = isAnagram("anagram", "nagaram")
const result = isAnagram("aacc", "ccac")
// const result = isAnagram("car", "rat")

console.log({result});
