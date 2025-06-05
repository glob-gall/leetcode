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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if(!head) return null  
  let i = 0
  let dummy = new ListNode(0,head)

  let current: ListNode | null = dummy
  let nthPrev: ListNode | null = dummy
  while (current) {
    if(i > n) nthPrev = nthPrev?.next ?? null
    current = current.next 
    i++
  }
  
  if(nthPrev) nthPrev.next = nthPrev.next?.next || null
  return dummy.next
};

// const head = makeStack([1]) 
const head = makeStack([1]) 
printStack(head)
const newHead = removeNthFromEnd(head,1)
printStack(newHead)