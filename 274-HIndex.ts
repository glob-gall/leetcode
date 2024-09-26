function hIndex(citations: number[]): number {
  citations.sort((a,b) => b-a)
  console.log(`[${citations}]`);
  
  for (let i = citations.length-1; i >= 0; i--) 
    if(citations[i] >= i+1) return i+1
  
  return 0
}

const  citations = [3,0,6,1,5] // 3
// const  citations = [1,3,1] // 1

console.log(hIndex(citations));

