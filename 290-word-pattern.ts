function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(" ")
    if(words.length !== pattern.length) return false

    const wordsPattern = new Map<string,string>()
    const patternsWords = new Map<string,string>()

    for (let i = 0 ; i < words.length ; i++) {
     if(!wordsPattern.has(words[i]) && !patternsWords.has(pattern[i])){
      wordsPattern.set(words[i], pattern[i])
      patternsWords.set(pattern[i], words[i])
      continue
     } else if( wordsPattern.get(words[i]) !== pattern[i] || patternsWords.get(pattern[i]) !== words[i] ) {
      return false
     }
    }

    return true
};


const result = wordPattern("abba", "dog cat cat dog")
// const result = wordPattern("abba", "dog cat cat fish")
// const result = wordPattern("abba", "dog dog dog dog")

console.log({result});
