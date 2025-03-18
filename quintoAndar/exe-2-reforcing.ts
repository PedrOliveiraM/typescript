/*
  Dado um array de números inteiros A, encontre o maior intervalo (gap) entre duas ocorrências do número 1. O intervalo é definido pelo número de elementos entre essas duas ocorrências. Se o número 1 aparecer menos de duas vezes, retorne 0.
*/

function solutionReforce(a: number[]): number {
  let maxGap = 0;
  let gap = 0;
  let foundOne = false

  for (let i = 0; i < a.length; i++) {
    const element = a[i];

    if (element === 1) {
      if (foundOne) {
        if (gap > maxGap) maxGap = gap
      }

      foundOne = true
      gap = 0
    }

    if (foundOne) gap++
  }

  return maxGap;
}

const A1 = [1, 0, 0, 1, 0, 1]

console.log(solutionReforce(A1));

export { solutionReforce };

