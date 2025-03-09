class RandomizedSet {
  private mod: number = 17
  private hash: number[][]
  constructor() {

    this.hash = [] 
    for(let i=0; i< this.mod; i++) {
      this.hash[i] = []
    }
  }

  insert(val: number): boolean {
    let notInserted = true
    const modI = Math.abs(val) % this.mod

    for (const element of this.hash[modI]) {
      if (element === val) {
        notInserted = false
        break
      }
    }
    
    this.hash[modI].push(val)
    return notInserted
  }

  remove(val: number): boolean {
    const modI = Math.abs(val) % this.mod
    const listSize =  this.hash[modI].length

    this.hash[modI] = this.hash[modI].filter( v => v !== val)

    return !(listSize === this.hash[modI].length)
  }

  getRandom(): number {
    const validHashIndexes: number[] = []
    for(let i=0; i < this.hash.length; i++) {
      if (this.hash[i].length > 0) {
        validHashIndexes.push(i)
      }
    }
    
    const randomI = Math.floor(Math.random() * validHashIndexes.length)
    const hashPosition = validHashIndexes[randomI]

    const randomJ = Math.floor(Math.random() * this.hash[hashPosition].length) 
    
    return this.hash[hashPosition][randomJ]
  }
}

var obj = new RandomizedSet()
obj.insert(3)
obj.insert(3)
console.log(obj.getRandom()); // 3
console.log(obj.getRandom()); // 3
obj.insert(3)


// "RandomizedSet","insert","insert","getRandom","getRandom","insert","remove","getRandom","getRandom","insert","remove"]
// [[]              [3],     [3],     [],         [],         [1],     [3],     [],         [],         [0],     [0]]
// [null,           true,    false,   3,          3,          true,    true,    1,          3,          true,    true]


// ["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]
// [[]             ,[1]     ,[2]     ,[2]     ,[]         ,[1]     ,[2]     ,[]]
// [null           ,true    ,true    ,true    ,2          ,false   ,false   ,2]
// [null           ,true    ,false   ,true    ,1          ,true    ,false   ,2] expected