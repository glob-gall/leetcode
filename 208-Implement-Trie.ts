class TrieNode {
  public isLeaf:boolean
  public children:TrieNode|null []
  constructor() {
    this.children = new Array(26).fill(null)
    this.isLeaf = false
  }
}

class Trie {
  private root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }


  insert(word: string): void {
    let cur:TrieNode = this.root

    let index:number
    for (let c of word) {
      index = c.charCodeAt(0) - 'a'.charCodeAt(0)
      if(!cur.children[index])
        cur.children[index] = new TrieNode()
      
      cur = cur.children[index]
    }

    cur.isLeaf = true
  }

  search(word: string): boolean {
    let cur:TrieNode = this.root

    let index:number
    for (let c of word) {
      index = c.charCodeAt(0) - 'a'.charCodeAt(0)
      if(!cur.children[index]) return false
      
      cur = cur.children[index]
    }
      return cur.isLeaf
  }

  startsWith(prefix: string): boolean {
    let cur:TrieNode = this.root

    let index:number
    for (let c of prefix) {
      index = c.charCodeAt(0) - 'a'.charCodeAt(0)
      if(!cur.children[index]) return false
      
      cur = cur.children[index]
    }
      return true
  }
}




const trie = new Trie()
trie.insert("apple")
const result1 = trie.search("apple")
const result2 = trie.search("app")
const result3 = trie.startsWith("app")
trie.insert("app")
const result4 = trie.search("app")

console.log(result1,result2,result3,result4);
