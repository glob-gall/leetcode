function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false  
  
  let mapStoT: {[k:string]: string} = {}
  let mapTtoS: {[k:string]: string} = {}

  for (let i = 0; i < s.length; i++) {
    if(!mapStoT[s[i]] && !mapTtoS[t[i]]) {
      mapStoT[s[i]] = t[i]
      mapTtoS[t[i]] = s[i]
    }
    
    if(mapStoT[s[i]] !== t[i]) return false
    if(mapTtoS[t[i]] !== s[i]) return false
  }   

  return true
}
// console.log(Object.values(Skeys), Object.values(Tkeys),Object.values(Skeys) === Object.values(Tkeys));

isIsomorphic("egg", "add")
isIsomorphic("foo", "bar")