class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  let fast = head.next;
  let slow: ListNode | null = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow?.next ?? null;
  }
  if (slow) slow.next = slow.next?.next || null;

  return head;
}
// function deleteMiddle(head: ListNode | null): ListNode | null {
//   // let queue: ListNode[] = new Array()
//   let fast = head;
//   let slow = head;

//   let fastIndex = 0;
//   let slowIndex = 0;
//   while (fast && slow) {
//     fast = fast.next;
//     fastIndex++;

//     if (slowIndex < Math.floor(fastIndex / 2) - 1) {
//       slow = slow.next;
//       slowIndex++;
//     }
//   }
//   if(fastIndex === 1) return null

//   if (slow) slow.next = slow.next?.next || null;

//   return head;
// }
