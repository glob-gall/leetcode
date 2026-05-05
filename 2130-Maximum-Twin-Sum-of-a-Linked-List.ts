class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function pairSum(head: ListNode | null): number {
  let mid = head;
  let top = head;

  while (top) {
    top = top.next?.next ?? null;
    mid = mid?.next ?? null;
  }
  let max = 0;

  let prev: ListNode | null = null;
  let next: ListNode | null = mid?.next ?? null;

  while (mid) {
    mid.next = prev;
    prev = mid;
    mid = next;
    next = next?.next ?? null;
  }

  let first = head;
  while (prev) {
    const val = prev.val + (first?.val || 0);
    if (val > max) max = val;
    first = first?.next ?? null;
    prev = prev.next;
  }

  return max;
}
