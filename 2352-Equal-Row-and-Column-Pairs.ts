function equalPairs(grid: number[][]): number {
  const cols = new Map<number, string>();
  const rows: { [key: string]: number } = {};

  let tempRow = "";
  let tempCol = "";
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      tempRow += grid[i][j] + ",";
      tempCol += grid[j][i] + ",";
    }
    cols.set(i, tempCol);
    if (!rows[tempRow]) rows[tempRow] = 0;
    rows[tempRow]++;
    tempRow = "";
    tempCol = "";
  }

  let count = 0;
  for (const [k, p] of cols) {
    if (rows[p]) count += rows[p];
  }

  console.log({ cols });
  console.log({ rows });
  console.log({ count });

  return count;
}

equalPairs([
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
]);
