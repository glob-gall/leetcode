
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  let Graph:{[k:number]:number[]} = {}
  for (let i = 0; i < numCourses; i++) {
    Graph[i] = [] 
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, prereq] = prerequisites[i];
    if (course === prereq) return false;
    Graph[prereq].push(course)
  }

  const state = new Array(numCourses).fill(0); // 0 = unvisited, 1 = visiting, 2 = visited


  function dfs(node: number): boolean {
    if (state[node] === 1) return true; // cycle detected
    if (state[node] === 2) return false; // already processed

    state[node] = 1; // mark as visiting

    for (const neighbor of Graph[node]) {
      if (dfs(neighbor)) return true;
    }

    state[node] = 2; // mark as safe
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if(dfs(i)) return false
    
    
  }

  return true
};


//const result = canFinish(3,[[1,0],[0,2]])
//const result2 = canFinish(6,[[1,0],[1,2],[3,1],[2,3],[2,4],[4,5],[2,5]])
// const result3 = canFinish(20,[[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]])
// const result4 = canFinish(3,[[1,0]])
//const result5 = canFinish(3,[[0,1],[0,2],[1,2]])
// const result6 = canFinish(3,[[0,2],[1,2],[2,0]])

const result7 = canFinish(8,[[1,0],[2,6],[1,7],[5,1],[6,4],[7,0],[0,5]])

console.log(result7);
