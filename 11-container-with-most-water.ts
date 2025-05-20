function maxArea(height: number[]): number {
  
  let left = 0
  let right = height.length-1

  let topWater = 0 
  let maxArea = 0
  let cArea = maxArea

  while (left < right) {   
    topWater = height[left] < height[right] ? height[left] : height[right]
    cArea = topWater * ( right-left )
    if(cArea > maxArea) maxArea = cArea

    if(height[left] < height[right]) left+=1;
    else right-=1;
  }
  return maxArea
}

// const height = [1,8,6,2,5,4,8,3,7]
// const height = [1,1]

//              0 1 2 3 4 5 6 7  8
// const height = [1,8,6,2,5,4,8,25,7]
const height = [1,2,4,3]

const result = maxArea(height)
console.log({result});
