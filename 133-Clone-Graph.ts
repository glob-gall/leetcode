
class _Node {
    val: number
    neighbors: _Node[]

    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}



function cloneGraph(node: _Node | null): _Node | null {
	if(!node) return null

  const visited:_Node[] = []

    
  function loop(cur: _Node): _Node{
    if(visited[cur.val]) return visited[cur.val]
    
    const nodeCopy = new _Node(cur.val)
    visited[cur.val] = nodeCopy

    let newNeighbors: _Node[] = []
    for (let i = 0; i < cur.neighbors.length; i++) {
      const neighbor = cur.neighbors[i]
      if(visited[neighbor.val]) newNeighbors.push(visited[neighbor.val])
      else newNeighbors.push(loop(neighbor))
      
    }
    
    nodeCopy.neighbors = newNeighbors
    return nodeCopy
  }

  return loop(node)
};

const node1 = new _Node(1)
const node2 = new _Node(2)
const node3 = new _Node(3)
const node4 = new _Node(4)

node1.neighbors = [node2,node4]
node2.neighbors = [node1,node3]
node3.neighbors = [node2,node4]
node4.neighbors = [node1,node3]

const copy = cloneGraph(node1)

console.log(node1);
