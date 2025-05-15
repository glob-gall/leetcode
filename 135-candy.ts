
function candy(ratings: number[]): number {
  const len = ratings.length
  if(len === 1 ) return 1
  if(len === 2 ) return ratings[0] !== ratings[1] ? 3 : 2
  
  
  let rightCandy = new Array(len).fill(1)  
  let leftCandy = new Array(len).fill(1)  

  let candies = 0
  for (let i = 1; i < len; i++) {
    if (ratings[i-1] < ratings[i]) {
      leftCandy[i] += leftCandy[i-1]
    }
    if (ratings[len-i] < ratings[len-i-1]) {
      rightCandy[len-i-1] += rightCandy[len-i]
    }
  }  

  for (let i = 0; i < len; i++) {
    if(rightCandy[i] > leftCandy[i])
      candies += rightCandy[i]
    else 
    candies += leftCandy[i]
    
  }
  return candies
};

const ratings1 = [1,2,3,4,5] // 15
const ratings2 = [1,0,2] // 5
const ratings3 = [1,2,2] // 4

const ratings4 = [5,4,3,2,1] // 15
const ratings5 = [1,3,2,2,1] // 7

const ratings6 = [1,0] // 3
const ratings7 = [1,2] // 3
const ratings8 = [100] // 1


const result1 = candy(ratings1)
console.log(`${result1} === 15 ? ${result1===15}`);

const result2 = candy(ratings2)
console.log(`${result2} === 5 ? ${result2===5}`);

const result3 = candy(ratings3)
console.log(`${result3} === 4 ? ${result3===4}`);

const result4 = candy(ratings4)
console.log(`${result4} === 15 ? ${result4===15}`);

const result5 = candy(ratings5)
console.log(`${result5} === 7 ? ${result5===7}`);

const result6 = candy(ratings6)
console.log(`${result6} === 3 ? ${result6===3}`);

const result7 = candy(ratings7)
console.log(`${result7} === 3 ? ${result7===3}`);

const result8 = candy(ratings8)
console.log(`${result8} === 1 ? ${result8===1}`);



