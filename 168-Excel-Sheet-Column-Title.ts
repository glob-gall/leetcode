function convertToTitle(columnNumber: number): string {
  let keys = [
    'A','B','C','D','E','F',
    'G','H','I','J','K','L',
    'M','N','O','P','Q','R',
    'S','T','U','V','W','X','Y','Z'
  ]

  let resp = ""
  let num = columnNumber
  while (num > 0) {
    num = num-1
    resp = keys[(num % 26)] + resp
    num = Math.floor(num/26)
  }

  return resp
};

console.log(convertToTitle(28))
console.log(convertToTitle(701))