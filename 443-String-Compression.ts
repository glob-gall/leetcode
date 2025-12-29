function compress(chars: string[]): number {
  let qnt = 0;

  let lastChar = chars[0];
  let writeIndex = 0;

  chars.push("");
  for (const char of chars) {
    if (char.localeCompare(lastChar) !== 0) {
      chars[writeIndex] = lastChar;
      if (qnt > 9) {
        let num = ("" + qnt).split("");
        for (const i of num) {
          chars[writeIndex + 1] = "" + i;
          writeIndex++;
        }
      } else if (qnt > 1) {
        chars[writeIndex + 1] = "" + qnt;
        writeIndex++;
      }

      writeIndex++;
      lastChar = char;
      qnt = 0;
    }

    qnt++;
  }
  // console.log(writeIndex, chars);

  return writeIndex;
}

// compress(["a", "a", "b", "b", "c", "c", "c"]);
compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]);
