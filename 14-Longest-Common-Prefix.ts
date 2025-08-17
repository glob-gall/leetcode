


class Trie {
  public commumPrefix:string
  
  constructor(firstWord: string) {
    this.commumPrefix = firstWord
  }

  insert(word:string){
    let prefix = ""

    for (let i = 0; i < word.length; i++) {
      if (word[i] !== this.commumPrefix[i]) break
      prefix=prefix+word[i]
    }
    this.commumPrefix = prefix
  }
}

function longestCommonPrefix(strs: string[]): string {
  const trie = new Trie(strs[0])
  for (let i = 0; i < strs.length; i++) {
    trie.insert(strs[i])    
  }

  return trie.commumPrefix
};

const autoWords = [
  "autograph",
  "automatic",
  "autonomous",
  "autopilot",
  "autobiography",
  "autodidact",
  "autoimmune",
  "autopsy",
  "automobile",
  "autofocus"
];

console.log(
  longestCommonPrefix(autoWords)
)