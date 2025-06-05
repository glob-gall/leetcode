class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

function makeStack(arr:number[]) {
const head = new ListNode(arr[0])

let current = head
for (let i = 1; i < arr.length; i++) {
  let next = new ListNode(arr[i]) 
  current.next = next
  current = next
}  
return head
}

function printStack(node: ListNode|null) {
let str = ''
let current = node

while (current) {
  str = str + `(${current.val})->`
  current = current.next
}
console.log(str+'|'); 
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if(!head) return null
  if (left === right) return head

  let count = 1

  let beforeLeftNode: ListNode | null = null
  let lNode: ListNode | null = null
  let rNode: ListNode | null = null
  let afterRightNode: ListNode | null = null

  let cur: ListNode | null  = head
  let next: ListNode | null  = cur
  let prev: ListNode | null  = null
  while (count<=right+1 && cur) {
    console.log(`count:${count} prev:${prev?.val}, cur:${cur.val} next:${next?.val}`);
    
    // printStack(head)
    
    next = cur.next
    
    if(count === left - 1) beforeLeftNode = cur
    else if(count === left) lNode = cur
    else if(count === right) rNode = cur
    else if(count === right + 1) afterRightNode = cur
    
    if(count >= left && count <= right) {
      cur.next = prev
    }
    
    prev = cur
    cur = next
    count+=1
  }
  
  if(beforeLeftNode) beforeLeftNode.next = rNode
  if (lNode) lNode.next = afterRightNode
  if(left === 1) head = rNode
  return head
}

const head = makeStack([1,2,3,4,5]) 
// const head = makeStack([3,5]) 
printStack(head)
const newHead = reverseBetween(head,1,3)
// reverseBetween(head,4,5)
printStack(newHead)