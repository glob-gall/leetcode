function lengthOfLongestSubstring(s: string): number {
  let max = 0
  let slide: string[] = []

  let keys: {[k:string]: boolean} = {}
  let cur = ''

  let i = 0
  while (i < s.length) {
    cur = s[i]
    
    if(!keys[cur]){
      slide.push(cur)
      keys[cur] = true
      i++
    } else {
      const removed = slide.shift()
      if(removed) keys[removed] = false
    }
    
    
    if(slide.length > max) max = slide.length
  }
  
  return max
};  

// const response = lengthOfLongestSubstring( "abcabcaaxayazaabcd")
// const response = lengthOfLongestSubstring( "aab")
const response = lengthOfLongestSubstring( "pwwkew")

console.log({response});


/**
 * > se o item ainda não foi encontrado
 * >> adiciona na slide window
 * >> adiciona no dicionario
 * > senão
 * >> 
 */
