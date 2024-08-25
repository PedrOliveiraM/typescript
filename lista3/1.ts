// criar uma matriz 7x8

// uma matriz é um vetor de vetores
let matriz: number[][] = new Array(7)

for (let i = 0; i < 7; i++) {
  matriz[i] = new Array(8)

  for (let j = 0; j < 8; j++) {
    matriz[i][j] = i + j
  }
}

let result: string = ""
for (let i = 0; i < 7; i++) {
  result += "\n"
  for (let j = 0; j < 8; j++) {
    result += " " + matriz[i][j] + " "
  }
}

console.log(result)