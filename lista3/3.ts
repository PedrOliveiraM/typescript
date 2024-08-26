// matriz 3x3

// soma de cada linha
//soma de cada coluna
// diagonal principal
// diagonal secundaria

const matriz: number[][] = [
  [8, 0, 7],
  [4, 5, 6],
  [3, 10, 2],
]

let sumRow: number = 0
let sumCol: number = 0
let sumDiagP: number = 0
let sumDiagS: number = 0

// soma da 1 linha 
let reference: number = matriz[0][0] + matriz[0][1] + matriz[0][2]
console.log("Referencia: ", reference)

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    sumRow += matriz[i][j]
    sumCol += matriz[j][i]

    if (i == j) {
      sumDiagP += matriz[i][j]
    }
  }
  sumDiagS += matriz[i][3 - 1 - i]

  if (sumRow != reference) {
    console.log("Não é quadrado Mágico 1 - ", sumRow)
    break
  }
  if (sumCol != reference) {
    console.log("Não é quadrado Mágico 2 - ", sumCol)
    break
  }
  sumRow = 0
  sumCol = 0
}

if (sumDiagP != sumDiagS) {
  console.log("Não é quadrado Mágico 3 - ", sumDiagP, " - ", sumDiagS)
} else if (sumDiagP != reference) {
  console.log("Não é quadrado Mágico 4")
} else {
  console.log("É Quadrado Mágico !")
}
