const translateSet = {
  1:'I',
  5:'V',
  10:'X',
  50:'L',
  100:'C',
  500:'D',
  1000:'M',
}

function intToRoman(num: number): string {
  const numbers = [ 1000, 900, 500, 400, 100,  90, 50,  40, 10,   9,  5,   4, 1 ]
  const letters = [  'M','CM', 'D','CD', 'C','XC','L','XL','X','IX','V','IV','I']
  
  let counter = 0
  while ( numbers[counter] > num ) {
    counter++
  }
    
  let roman = ""
  let rest = num
  while (rest > 0) {
    if( numbers[counter] > rest){
      counter++
      continue
    }
    roman = roman.concat(letters[counter])
    rest = rest - numbers[counter]
  }
  return roman
};



console.log({
  MCMXCIV:intToRoman(1994)
});
