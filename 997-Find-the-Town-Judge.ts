
function findJudge(n: number, trust: number[][]): number {
  if (n===1) return 1

  let inDegree: number[] = Array(n+1).fill(0)
  let outDegree: number[] = Array(n+1).fill(0)

  for (let i = 0; i < trust.length; i++) {
    outDegree[trust[i][0]]+=1
    inDegree[trust[i][1]]+=1
  }

  
  for (let i = 0; i <= n; i++) 
    if ( ( inDegree[i] === (n-1) ) && ( outDegree[i] === 0 ) ) return i 
  
  return -1
};
