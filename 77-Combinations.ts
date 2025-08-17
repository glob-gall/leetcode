function combine(n: number, k: number): number[][] {
  const combinations:number[][] = []

  const backtrack = (initial:number, cur:number[]=[]) => {
    if(cur.length === k) {
      combinations.push(cur)
      return
    }
    for (let i = initial; i <= n; i++) {

      backtrack(i+1,[i,...cur])
    }
  }
  
  backtrack(1)
  return combinations
};

const result = combine(4,2)

console.log(result);


/**
 * function combine(n: number, k: number, cur=1): number[][] {
  const combinations:number[][] = []


  if(k === 1) {
    const base:number[][] = []
    for (let i = cur; i <=n; i++) 
      base.push([i])
      
    return base
  }

  for (let i = cur; i <=n; i++)  {
    const tmp = combine(n,k-1, i+1)
    for (const newTmp of tmp) {
      combinations.push([i,...newTmp])
    }
  }

  return combinations
};

const result = combine(4,2)

console.log(result);
 */