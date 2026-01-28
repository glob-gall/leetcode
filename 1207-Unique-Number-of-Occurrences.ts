function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map<number, number>();

  let x = 0;
  arr.forEach((n) => {
    x = map.get(n) || 0;
    map.set(n, x + 1);
  });

  const values = new Set(map.values());

  return map.size === values.size;
}
