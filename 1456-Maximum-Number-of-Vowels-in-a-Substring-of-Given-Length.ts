function maxVowels(s: string, k: number): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let sub = 0;

  let i: number;
  for (i = 0; i < k; i++) if (vowels.has(s[i])) sub++;
  let max = sub;
  while (i < s.length) {
    if (vowels.has(s[i - k])) sub--;
    if (vowels.has(s[i])) sub++;
    if (sub > max) max = sub;
    i++;
  }

  return max;
}

maxVowels("abciidef", 3);
