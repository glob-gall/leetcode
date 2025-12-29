function isValid(s: string): boolean {
  const pair = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let stack: string[] = [];

  let i = 0;
  while (i < s.length) {
    if (pair[s[i]]) stack.push(s[i]);
    else {
      const top = stack.pop();
      if (!top || s[i].localeCompare(pair[top]) !== 0) return false;
    }

    i++;
  }

  return stack.length === 0;
}
