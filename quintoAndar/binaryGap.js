
function solution(N) {
  binaryNumber = N.toString(2)
  foundOne = false
  maxGap = 0
  gap = 0

  for (i = 0; i < binaryNumber.length; i++) {
    let element = binaryNumber[i]

    if (element === 1) {
      if (foundOne) {
        maxGap = Math.max(maxGap, gap)
      }

      foundOne = true
      gap = 0
    } else if (foundOne) {
      gap++
    }
  }

  return maxGap
}

console.log("Solution N: ", solution(1041));