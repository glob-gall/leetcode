function printArray(name:string,array:any[]) {
  let stringArray:string = ''
  array.forEach(a => {
    stringArray = stringArray + `${a},`
  })

  console.log(`[${name}]:${stringArray}`);
  
}

const numbers = [0,1,2,'x',4,5,6];
printArray('1',numbers) // [0,1,2,'x',4,5,6]
numbers.splice(3, 0, 3);
printArray('2',numbers) // [0,1,2,3,'x',4,5,6]
numbers.splice(4, 1);
printArray('3',numbers) // [0,1,2,3,4,5,6]



// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log({arr});
// var removed = arr.splice(2,2);
// console.log({arr});