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
  console.log({current});
  
  while (current) {
    str = str + `(${current.val})->`
    current = current.next
  }
  console.log(str+'|'); 
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2  
  if (!l2) return l1  
  

  const head = new ListNode()
  let current = head

  let sum = 0
  let acc = 0
  while(l1 && l2){
    let next = new ListNode()
    current.next = next
    current = next

    sum = l1.val + l2.val + acc
    
    acc = Math.floor(sum / 10)
    current.val = sum % 10

    l1 = l1.next
    l2 = l2.next
  }

  let l3 = l1 ?? l2
  while (l3) {
    let next = new ListNode()
    current.next = next
    current = next

    sum = l3.val + acc
    
    acc = Math.floor(sum / 10)
    current.val = sum % 10

    l3 = l3.next
  }

  if(acc) current.next = new ListNode(acc)

  return head.next ?? head
};






// const head1 = makeStack([2,4,3])
// const head2 = makeStack([5,6,4])
// const head1 = makeStack([0])
// const head2 = makeStack([0])


const head1 = makeStack([9,9,9,9,9,9,9])
const head2 = makeStack([9,9,9,9])


const headSum = addTwoNumbers(head1,head2)

printStack(headSum)

