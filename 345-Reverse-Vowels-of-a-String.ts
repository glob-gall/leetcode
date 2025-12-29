function reverseVowels(s: string): string {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let vowelI: number[] = [];

  const splitedS = s.split("");

  for (let i = 0; i < s.length; i++)
    if (vowels.has(splitedS[i])) vowelI.push(i);

  let left = 0;
  let right = vowelI.length - 1;
  let aux: string;
  while (left < right) {
    aux = splitedS[vowelI[left]];
    splitedS[vowelI[left]] = splitedS[vowelI[right]];
    splitedS[vowelI[right]] = aux;
    left++;
    right--;
  }

  return splitedS.join("");
}
