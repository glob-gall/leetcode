function strStr(haystack: string, needle: string): number {
  if(haystack.length < needle.length) return -1
  if(haystack.length === needle.length) {
    return haystack === needle ? 0 : -1
  }

  for (let i = 0; i <= haystack.length-needle.length; i++) {     
    if(haystack.substring(i, i+needle.length) === needle) return i
  }

  return -1
};

function strStr2(haystack: string, needle: string): number {
  return haystack.indexOf(needle)
}

const  strStr3 = (haystack: string, needle: string): number => haystack.indexOf(needle)

// console.log(`${haystack}[${i},${i+needle.length}] = ${sub}`);

// console.log(strStr('abccccccdef','def'));
// console.log(strStr('abcdeddddddddddddddf','de'));
// console.log(strStr('f','de'));
console.log(strStr2("sadbutsad",'sad'));
console.log(strStr2("leetcode",'leeto'));
console.log(strStr2("abc",'abb'));
console.log(strStr2("abc",'abc'));
console.log(strStr2("a",'a'));
console.log(strStr2("abc",'a'));
console.log(strStr2("abc",'b'));
console.log(strStr2("abc",'c'));
/**
 * s0 s0
 * 
 */