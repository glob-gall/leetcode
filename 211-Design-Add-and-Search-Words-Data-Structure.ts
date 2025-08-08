class TrieNode {
  public isLeaf: boolean
  public children: TrieNode []
  
  constructor(){
    this.isLeaf = false
    this.children = new Array(26).fill(null)
  }
}

class WordDictionary {
  private root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }

  addWord(word: string): void {
    let current = this.root
    for (let key of word) {
      const index = key.charCodeAt(0) - 'a'.charCodeAt(0)      
      if(!current.children[index]) current.children[index] = new TrieNode()

      current = current.children[index]
    }
    current.isLeaf = true
  }

  search(word: string): boolean {    
    function dfs(node: TrieNode|null, step:number): boolean {
      if(!node) return false
      if(step === word.length) return node.isLeaf

      if (word[step] === '.') {
        for (let i = 0; i < node.children.length; i++)
          if(dfs(node.children[i],step+1)) return true
        return false
      }

      const index = word.charCodeAt(step) - 'a'.charCodeAt(0)
      if(!node.children[index]) return false
      return dfs(node.children[index],step+1)
      
    }
      

    
    return dfs(this.root,0)
  }
}

const input = ["bad","dad","mad",]
const search = ["pad","bad",".ad","b.."]

var obj = new WordDictionary()

for (const word of input)
  obj.addWord(word)

// console.log('b..',':',obj.search("b.."));
for (const word of search)
  console.log(word,':',obj.search(word));
  
  
  


