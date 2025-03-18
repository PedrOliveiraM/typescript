function solution(N: number): number {
  const binary = N.toString(2)
  let maxGap = 0
  let currentGap = 0
  let foundOne = false

  for (let index = 0; index < binary.length; index++) {
    const element = binary[index];

    if (element === "1") {
      if (foundOne) {
        if (currentGap > maxGap)
          maxGap = currentGap
      }
      foundOne = true
      currentGap = 0
    } else if (foundOne) {
      currentGap++
    }
  }

  return maxGap;
}

const N = 1041
console.log(solution(N)) 
