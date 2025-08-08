function minMutation(startGene: string, endGene: string, bank: string[]): number {
  
  const mutations = ['A','C','G','T']
    let allowedMutations:Set<string> = new Set(bank)
    let visited:Set<string> = new Set()

    let queue:{el:string, step:number}[] = []
    let curGene:{el:string, step:number} | undefined = {el:startGene, step:0}
    
    while (curGene.el !== endGene) {
      visited.add(curGene.el)
      
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 8; j++) {
          const mutatedGene = curGene.el.slice(0, j) + mutations[i] + curGene.el.slice(j + 1);
          if(!visited.has(mutatedGene) && allowedMutations.has(mutatedGene)) {
            queue.push({el:mutatedGene, step: curGene.step+1})
          }
          
        }
      }
      
      curGene = queue.shift()
      if(!curGene) return -1

    }

    return curGene.step
};

const startGene = "AACCGGTT"
const endGene = "AACCGCTA"
const bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]

const result = minMutation(startGene,endGene,bank)
console.log({result});
