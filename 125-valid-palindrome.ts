function isPalindrome(s: string): boolean {
    /**
     * charcodes :47 > (0-9) < 58
     * charcodes :64 > (A-Z) < 91
     * charcodes :96 > (a-z) < 123
     */
    let i = 0
    let j = s.length-1
    

    while (i < j) {
      if(
        !(s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58) &&
        !(s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) &&
        !(s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123)
      ) {
        i++
        continue
      }

      if(
        !(s.charCodeAt(j) > 47 && s.charCodeAt(j) < 58) &&
        !(s.charCodeAt(j) > 64 && s.charCodeAt(j) < 91) &&
        !(s.charCodeAt(j) > 96 && s.charCodeAt(j) < 123)
      ) {
        j--
        continue
      }
      
      if(s[i].toLowerCase() !== s[j].toLowerCase()) return false
      i++;j--;
    }
    return true
};

// const result = isPalindrome("A man, a plan, a canal: Panama")
// const result = isPalindrome("race a car")
const result = isPalindrome("aa")
console.log({result});
