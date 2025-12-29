function gcdOfStrings(str1: string, str2: string): string {
  if ((str1 + str2).localeCompare(str2 + str1) !== 0) return "";

  let [small, big] =
    str1.length > str2.length
      ? [str2.length, str1.length]
      : [str2.length, str1.length];

  let aux: number;
  while (small !== 0) {
    aux = big % small;
    big = small;
    small = aux;
  }

  return str1.substring(0, big);
}

let result = "";
result = gcdOfStrings(
  "TAUXXTAUXXTAUXXTAUXXTAUXX",
  "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
);

console.log({ result });
