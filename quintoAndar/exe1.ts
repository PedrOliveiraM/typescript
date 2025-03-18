const array: number[] = [1, 4, -1, 3, 2];

function solution1(A: number[]): number {
  let nodes = 0;
  let currentIndex = 0;

  while (currentIndex !== -1) {
    nodes++;
    currentIndex = A[currentIndex];
  }

  return nodes;
}

console.log(solution1(array));
