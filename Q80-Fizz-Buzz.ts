function fizzBuzz(n: number): string[] {
  const arr = Array(n)
  for (let i = 1; i <= n; i++) {
    console.log(`${i} = ${i % 3} = ${i % 5}`);
    
    let resp = ''
    if(i % 3 === 0) resp = 'Fizz'
    if(i % 5 === 0) resp = resp+'Buzz'
    if(resp.length === 0) resp = i.toString()
    
    arr[i-1] = resp
  }

  return arr
};

console.log(fizzBuzz(15));
