function titleToNumber(columnTitle: string): number {
  let sum = 0
  
  const base = 'A'.charCodeAt(0)-1 

  for (let i = 0; i < columnTitle.length; i++) {
    sum = sum*26
    sum = sum+ (columnTitle.charCodeAt(i) - base)
  }

  return sum
};

console.log(titleToNumber('A'));
console.log(titleToNumber('B'));
console.log(titleToNumber('C'));
console.log(titleToNumber('Z'));
console.log(titleToNumber('AB'));
console.log(titleToNumber('ZY'));
