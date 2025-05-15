

function romanToInt(s: string): number {
  const translateSet = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  if(s.length === 1) return translateSet[s]

  
  let sum = 0
  let last = ''

  for (let i = s.length-1; i >= 0; i--) {
    
    if(s.charAt(i) === "C" && (last === "D" || last === "M")) {
      sum = sum - 100
    } else if(s.charAt(i) === "X" && (last === "L" || last === "C")) {
      sum = sum - 10
    } else if (s.charAt(i) === "I" && (last === "V" || last === "X")) {
      sum = sum - 1      
    }else {
      sum = sum + translateSet[s.charAt(i)]
    }
    
    last = s.charAt(i)
  }

  return sum
};


// console.log({
//   III: romanToInt("III")
// });

// console.log({
//   LVIII:romanToInt("LVIII")
// });
console.log({
  MCMXCIV:romanToInt("MCMXCIV")
});

// romanToInt("LVIII")
// romanToInt("MCMXCIV")