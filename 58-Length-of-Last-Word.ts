function lengthOfLastWord(s: string): number {
  let lastChar = s.length-1
  while (s[lastChar] === ' ') {
    lastChar--
  }


  let i = lastChar
  while (i>=0) {
   if (s[i] === ' ') break
    i--
  }

  return lastChar - i 
};

console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
