/*
  inputs:
  receber 4 notas
  # fazer a media 
  # verificar se passou, media 8 >= aprovado , reprovado 
*/
let n1: number = 7;
let n2: number = 10;
let n3: number = 5;
let n4: number = 8;

function resultAverageGrades(n1: number, n2: number, n3: number, n4: number) {
  let average: number = (n1 + n2 + n3 + n4) / 4
  let minAverage: number = 8

  if (average >= minAverage) {
    console.log("Media: ", average)
    console.log("Aprovado")
  } else {
    console.log("Media: ", average)
    console.log("Reprovado")
  }
}

resultAverageGrades(n1, n2, n3, n4)