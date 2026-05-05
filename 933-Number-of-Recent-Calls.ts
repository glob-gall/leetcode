class RecentCounter {
  private max = 3000;
  private memo: number[] = [];
  constructor() {}

  ping(t: number): number {
    const tMax = t - this.max - 1;
    this.memo.push(t);

    let left = 0;
    let right = this.memo.length;
    let i = 0;
    while (left <= right) {
      i = Math.floor((right + left) / 2);

      if (this.memo[i] > tMax) right = i - 1;
      else left = i + 1;
    }
    this.memo = this.memo.slice(left);
    return this.memo.length;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

const obj = new RecentCounter();
obj.ping(825); // -2175 [825] - 1
obj.ping(2295); // -705 - [825,2295] 2

obj.ping(4131); // 1131 - [2295,4131] 2
obj.ping(5455); // 2455 - [4131,5455] 2
obj.ping(5884); // 2884 - [4131,5455,5884] 3
obj.ping(5975); // 2975 - [4131,5455,5884,5975] 4
