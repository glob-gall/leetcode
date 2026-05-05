class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let prev: ListNode | null = null;
  let cur: ListNode | null = head;
  let next: ListNode | null = head.next;

  while (cur) {
    cur.next = prev;
    prev = cur;
    cur = next;
    next = next?.next ?? null;
  }
  return prev;
}
