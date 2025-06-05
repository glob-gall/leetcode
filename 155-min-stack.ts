type StackElement = {
  min:number
  element:number
}

class MinStack {
  private stack:StackElement[] = []
  constructor() {
      
  }

  push(val: number): void {
    const newElement:StackElement = {
      element: val,
      min: val
    }
    if(this.stack.length !== 0)
      newElement.min = Math.min(val, this.stack[this.stack.length-1].min)
    

    this.stack.push(newElement)
  }

  pop(): void {
      this.stack.pop()
  }

  top(): number {
      return this.stack[this.stack.length-1].element
  }

  getMin(): number {
    return this.stack[this.stack.length-1].min
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
const a = minStack.getMin(); // return -3
minStack.pop();
const b = minStack.top();    // return 0
const c = minStack.getMin(); // return -2

console.log({a,b,c});
