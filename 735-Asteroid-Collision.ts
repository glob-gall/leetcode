// function asteroidCollision(asteroids: number[]): number[] {
//   const stack: number[] = [];

//   let stackTop: number;
//   let queueTop: number;
//   let diff: number;
//   let i = 0;

//   // console.log(stack, q);
//   while (i < asteroids.length) {
//     queueTop = asteroids[i];
//     stackTop = stack[stack.length - 1] ?? 0;

//     if (stackTop > 0 && queueTop < 0) {
//       diff = stackTop + queueTop;
//       // diff = Math.abs(stackTop) - Math.abs(queueTop);
//       if (diff > 0) i++;
//       else if (diff < 0) {
//         stack.pop();
//       } else {
//         stack.pop();
//         i++;
//       }
//     } else {
//       stack.push(asteroids[i]);
//       i++;
//     }

//     i++;
//   }
//   console.log(stack);

//   return stack;
// }

function asteroidCollision(asteroids: number[]): number[] {
  const q = asteroids;
  const stack: number[] = [];

  let stackTop: number;
  let queueTop: number;
  let diff: number;
  let i = 0;

  // console.log(stack, q);

  while (q.length) {
    queueTop = q[0];
    stackTop = stack[stack.length - 1] ?? 0;

    if (stackTop > 0 && queueTop < 0) {
      diff = stackTop + queueTop;
      // diff = Math.abs(stackTop) - Math.abs(queueTop);
      if (diff > 0) q.shift();
      else if (diff < 0) {
        stack.pop();
      } else {
        stack.pop();
        q.shift();
      }
    } else {
      stack.push(q[0]);
      q.shift();
    }

    i++;
  }
  console.log(stack, q);

  return stack;
}

asteroidCollision([10, -5, -5, 2, -5]);
asteroidCollision([10, 2, -5]);
asteroidCollision([3, 5, -6, 2, -1, 4]);
