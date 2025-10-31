class NumArray {
  private nums: number[]
  constructor(nums: number[]) {
    this.nums = nums
  }

  sumRange(left: number, right: number): number {
    let sum = 0
    for (let i = left; i <= right; i++) {
      sum += this.nums[i]
    }
    return sum
  }
}

