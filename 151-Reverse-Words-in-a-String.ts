function reverseWords(s: string): string {
  const split = (" " + s + " ").split(/\s+/);

  let left = 0;
  let right = split.length - 1;

  let aux: string;
  while (left < right) {
    aux = split[left];
    split[left] = split[right];
    split[right] = aux;

    left++;
    right--;
  }
  // split.reverse();
  split.shift();
  split.pop();
  return split.join(" ");
}

let result = "";
result = reverseWords("the sky is blue");
console.log(result);
result = reverseWords("  hello world  ");
console.log(result);
result = reverseWords("  hello world");
console.log(result);
