function mergeAlternately(word1: string, word2: string): string {
  const minLen = word1.length < word2.length ? word1.length : word2.length;

  let str = "";
  let i;
  for (i = 0; i < minLen; i++) {
    str += word1[i] + word2[i];
  }

  return str.concat(word1.slice(i), word2.slice(i));
}

console.log(mergeAlternately("aaa", "bbbb"));
