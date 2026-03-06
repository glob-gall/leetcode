// 2[abc]3[cd3[a]]ef
// abcabccdaaacdaaacdaaaef
// abcabccdaaacdaaacdaaaef
function decodeString(s: string): string {
  const stack: string[] = [];
  const numStack: number[] = [];
  let curString = "";
  let curNumber = 0;

  for (const c of s) {
    if (c === "]") {
      const lastNum = numStack.pop() ?? 0;
      const last = stack.pop() ?? "";

      let decoded = "";
      for (let i = 0; i < lastNum; i++) decoded += curString;

      curString = last + decoded;
    } else if (c === "[") {
      stack.push(curString);
      numStack.push(curNumber);
      curNumber = 0;
      curString = "";
    } else if (c.toLowerCase() !== c.toUpperCase()) {
      curString = curString + c;
    } else curNumber = curNumber * 10 + Number(c);
  }

  return curString;
}

console.log(decodeString("2[abc]3[cd3[a]]ef"));
