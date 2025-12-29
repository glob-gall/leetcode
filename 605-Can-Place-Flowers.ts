function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) return true;

  let nToPlant = n;
  let countZeros = 0;
  let i = 0;

  flowerbed = [0, ...flowerbed, 0];

  while (i < flowerbed.length) {
    if (flowerbed[i] === 0) countZeros++;
    else countZeros = 0;

    if (countZeros === 3) {
      countZeros = 1;
      nToPlant--;
    }

    if (nToPlant === 0) return true;
    i++;
  }
  return nToPlant === 0;
}
console.log({ result: canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2) }); //true

// console.log({ result: canPlaceFlowers([1, 0, 0, 0, 1], 1) }); //true
// console.log({ result: canPlaceFlowers([1, 0, 0, 0, 1], 2) }); //false
// console.log({ result: canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 1) }); //false
// console.log({ result: canPlaceFlowers([0], 1) }); //true
// console.log({ result: canPlaceFlowers([1, 0, 0, 0], 1) }); // true
// console.log({ result: canPlaceFlowers(, 1) });
