// const nToBinary = (n: number) => n.toString(2);
// const binaryCountOnes = (b: string) => b.match(/1/g)?.length || 0

// function countBits(n: number): number[] {
//   const arr = Array(n).fill(0)

//   for (let i = 0; i < n; i++) {
//     arr[i] = binaryCountOnes(nToBinary(i))
    
//   }

//   return arr
// };
function countBits(n: number): number[] {  
  const arr = Array(n+1).fill(0)

  for (let i = 1; i <= n; i++) {
    if(i % 2 === 0) arr[i] = arr[i/2]
    else arr[i] = arr[i-1] + 1
  }

  return arr
};

const result = countBits(100)

console.log(result);
