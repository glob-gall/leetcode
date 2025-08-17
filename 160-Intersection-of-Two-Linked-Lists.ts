class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
 

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const map = new Set<ListNode>()

  let curA = headA
  let curB = headB
  while (curA) {
    map.add(curA)
    curA = curA.next
  }
  while (curB) {
    if(map.has(curB)) return curB
    map.add(curB)
    curB = curB.next
  }

  return null
};