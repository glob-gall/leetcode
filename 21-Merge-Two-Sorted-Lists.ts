
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if(!list1) return list2 
  if(!list2) return list1

  let curr1: ListNode | null = list1
  let curr2: ListNode | null = list2
  
  let merged:ListNode
  merged = curr1

  if(curr1.val > curr2.val){
    merged = curr2
    curr2 = curr2.next
  } else curr1 = curr1.next

  let mergedCurr: ListNode = merged

  while(curr1 && curr2) {
      if(curr1.val < curr2.val) {
        mergedCurr.next = curr1
        curr1 = curr1.next
      } else {
        mergedCurr.next = curr2
        curr2 = curr2.next 
      }
      mergedCurr = mergedCurr.next
  }
  let remainNodes = curr1 ?? curr2
  
  mergedCurr.next = remainNodes

  return merged
};

const node4 = new ListNode(4)
const node3 = new ListNode(3,node4)
const node2 = new ListNode(2,node3)
const node1 = new ListNode(1,node2)
const node10 = new ListNode(10,node1)

let node: ListNode | null = node10
let str = '|'
while (node) {
  str = str + `(${node.val})->`
  node = node.next
}
console.log(str);
