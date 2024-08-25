const metrageTable: { [key: number]: number } = {
  100: 0,
  150: 1,
  200: 2,
  250: 3,
  300: 4,
}
const neighborhoodTable: { [key: string]: number } = {
  "asa sul": 0,
  "universitario": 1,
  "nova vila": 2,
  "zona leste": 3,
  "morumbi": 4,
}

let matrix: number[][] = new Array(5)
let metrage: number = 200
let bairro: string = "universitario"



// preenchendo
for (let i = 0; i < 5; i++) {
  matrix[i] = new Array(5)
  for (let j = 0; j < 5; j++) {
    matrix[i][j] = Math.trunc(Math.random() * 1000)
  }
}

// Mostrando a matriz
let format: string = ""
for (let i = 0; i < 5; i++) {
  format += "\n"
  for (let j = 0; j < 5; j++) {
    format += " " + matrix[i][j] + " "
  }
}
console.log(format)

function lowestPriceApartamentByMetrage(metrage: number) {
  let col: number = metrageTable[metrage]

  let menor: number = matrix[0][col]

  for (let i = 1; i < 5; i++) {
    let atual: number = matrix[i][col]
    if (atual < menor) {
      menor = atual
    }
  }
  console.log("Menor valor da metragem ", metrage, " = ", menor)
}
function priceApartament(metrage: number, neighborhood: string) {
  let row: number = metrageTable[metrage]
  let col: number = neighborhoodTable[neighborhood]
  console.log(row)
  console.log(col)
  console.log("Valor do apto: ", matrix[row][col])
}

function averageApartamentMetrage() {
  let total: number = 0
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      total += matrix[j][i]
    }
    console.log("Media da ", i, "coluna = ", total / 5)
  }
}

lowestPriceApartamentByMetrage(metrage)
priceApartament(metrage, bairro)
averageApartamentMetrage()