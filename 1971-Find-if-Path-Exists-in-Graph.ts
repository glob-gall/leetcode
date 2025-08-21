
function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  let Graph:{[n:number]: number[]} = {}
  

  for (const [from, to] of edges) {
    if(!Graph[from]) Graph[from] = []
    if(!Graph[to]) Graph[to] = []
    
    Graph[from].push(to)
    Graph[to].push(from)
  }
  
  let visited = new Set<number>()

  function dfs(curr: number) {
    if(curr === destination) return true
    
    for (const neighbor of Graph[curr]) {
      if(!visited.has(neighbor)) {
        visited.add(neighbor)
        if(dfs(neighbor)) return true
      }
      
    }

    return false
  }

  return dfs(source)
}

console.log(validPath(10, [[4,3],[1,4],[4,8],[1,7],[6,4],[4,2],[7,4],[4,0],[0,9],[5,4]],5,9));
