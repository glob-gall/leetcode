import {makeStack,printStack} from './leetcode-helpers-ts/linked-list-helpers'
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if(!head) return null
  head.next = removeElements(head.next, val)
  if(head.val === val) return head.next

  return head
};

const root = makeStack([1,2,6,3,4,5,6])
printStack(root)
removeElements(root, 6)
printStack(root)