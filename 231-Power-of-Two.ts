function isPowerOfTwo(n: number) {
  return n > 0 && !(n & (n-1))
};



for (let i = 0; i < 20; i++) {
  const result = isPowerOfTwo(i)
  console.log(`${i} = ${result}`)
}