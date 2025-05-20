function isSubsequence(s: string, t: string): boolean {
  if (s===t) return true

  let max = t.length
  let sPointer = 0
  for (let i = 0; i < max; i++) {
    if (t[i] === s[sPointer]) sPointer+=1;
    if (sPointer === s.length) return true;
  }
  return false
};

const s = "abc"
const t = "ahbgdc"

// const s = "axc"
// const t = "ahbgdc"

const result = isSubsequence(s,t)
console.log({result});
