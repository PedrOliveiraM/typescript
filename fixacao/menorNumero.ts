const arrayNumber = [3, 6, 7, 9, 1, 10, 5, 9, 4, 6, 2];

const lowestNumberInArray = (array: number[]): number => {
  if (array.length === 0) {
    throw new Error("Array cannot be empty.");
  }

  let menor = array[0]; // Initialize to the first element of the array
  array.forEach((val) => {
    if (val < menor) {
      menor = val;
    }
  });
  return menor;
}

console.log(lowestNumberInArray(arrayNumber));
