function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;
  const map1: number[] = new Array(26).fill(0);
  const map2: number[] = new Array(26).fill(0);
  const a = "a".charCodeAt(0);

  for (let i = 0; i < word1.length; i++) {
    map1[word1.charCodeAt(i) - a]++;
    map2[word2.charCodeAt(i) - a]++;
  }

  console.log({ map1, map2 });

  for (let i = 0; i < map1.length; i++) {
    console.log(`${map1[i]}${!!map1[i]} - ${map2[i]}${!!map2[i]}`);
    if (!!map1[i] !== !!map2[i]) return false;
  }
  map1.sort();
  map2.sort();
  console.log({ map1, map2 });
  for (let i = 0; i < map1.length; i++) {
    if (map1[i] !== map2[i]) return false;
  }

  return true;
}

const result = closeStrings("abc", "bca");
//const result =  closeStrings("zabbba", "abbzzz");
console.log(result);
