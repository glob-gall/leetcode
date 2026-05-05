class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let oddHead = head.next;

  let cur: ListNode | null = head;
  let oddCur: ListNode | null = oddHead;

  while (cur && cur.next && oddCur && oddCur.next) {
    cur.next = cur.next.next;
    oddCur.next = oddCur.next.next;
    cur = cur.next;
    oddCur = oddCur.next;
  }
  if (cur) cur.next = oddHead;
  return head;
}
