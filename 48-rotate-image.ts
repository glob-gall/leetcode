function rotate(matrix: number[][]): void {
  let i = 0
  let j = 0
  let k = matrix.length-1
  let l = matrix[i].length-1
    
  let aux=0;
  while (i<=k && j<=l) {
    while (j < k) {
      aux = matrix[l][i]
      matrix[l][i] = matrix[k][l]
      matrix[k][l] = matrix[j][k]
      matrix[j][k] = matrix[i][j]
      matrix[i][j] = aux
      j+=1
      l-=1
    }
    i+=1
    k-=1

    j=i
    l= k
  }
};

const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

matrix.forEach(p =>{ console.log(p) })
rotate(matrix)
matrix.forEach(p =>{ console.log(p) })
