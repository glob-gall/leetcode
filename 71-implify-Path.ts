function simplifyPath(path: string): string {
    const stack: string[] = []

    const names  = path.split('/')
    for (let i = 0; i < names.length; i++) {
      if(names[i] === '..') stack.pop()
      else if(names[i] === '.') continue 
      else if(names[i] !== '') stack.push(names[i])
    }
    
    return '/'+stack.join('/')
};

//const result = simplifyPath("/.../a/../b/c/../d/./")
//const result = simplifyPath("/home/")
//const result = simplifyPath("//home//")
const result = simplifyPath("/home//foo/")
console.log(result);
