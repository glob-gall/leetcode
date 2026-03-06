function removeStars(s: string): string {
  const stack: string[] = [];

  let i = 0;
  while (i < s.length) {
    if (s.charAt(i) === "*") {
      stack.pop();
    } else stack.push(s.charAt(i));

    i++;
  }

  return stack.join("");
}
