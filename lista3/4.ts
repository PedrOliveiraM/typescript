// matrix 8x8

// TODO: SOMA DAS
/*
  a) Diag P ( i == j )
  b) Diag S ( n - 1 - i )
 */

// TODO: MOSTRAR :
/*
  TROCAR ELEMENTOS DA LINHA 2 - COLUNA 4
  TROQUE DIAG P - DIAG S 
  TROQUE DIAG S - DIAG P

  QUANTOS NUM PARES
  QUANTOS NUM IMPARES

  QUANTOS DIVISIVEIS POR 2

  MAIOR NUM DA MATRIZ 
  MENOR NUM DA MATRIZ 
 */

let n: number = 5;
let matrix: number[][] = new Array(n);
let sumDP: number = 0; // SOMA DA DIAGONAL PRINCIPAL
let sumDS: number = 0; // SOMA DA DIAGONAL SECUNDÁRIA
let listDiagP: number[] = [];
let listDiagS: number[] = [];
let contPares: number = 0; // contador de números pares
let contImpares: number = 0; // contador de números ímpares
let maiorValor: number = 0;
let menorValor: number = 999999;

// Função para exibir a matriz
function printMatrix(matrix: number[][]) {
  for (let i = 0; i < n; i++) {
    console.log(matrix[i].join(" "));
  }
  console.log("\n");
}

// Criando e preenchendo a matriz
for (let i = 0; i < n; i++) {
  matrix[i] = new Array(n);
  for (let j = 0; j < n; j++) {
    matrix[i][j] = Math.trunc(Math.random() * 10); // Preenche a matriz

    // Soma da diagonal principal
    if (i === j) {
      sumDP += matrix[i][j];
      listDiagP.push(matrix[i][j]);
    }

    // Soma da diagonal secundária
    if (i + j === n - 1) {
      sumDS += matrix[i][j];
      listDiagS.push(matrix[i][j]);
    }

    // Verifica se é par ou ímpar
    if (matrix[i][j] % 2 === 0) {
      contPares++;
    } else {
      contImpares++;
    }

    // Verifica maior e menor valor
    if (matrix[i][j] > maiorValor) maiorValor = matrix[i][j];
    if (matrix[i][j] < menorValor) menorValor = matrix[i][j];
  }
}

console.log("Matriz Original:");
printMatrix(matrix);

console.log(`Soma da Diagonal Principal: ${sumDP}`);
console.log(`Soma da Diagonal Secundária: ${sumDS}`);
console.log(`Números Pares: ${contPares}`);
console.log(`Números Ímpares: ${contImpares}`);
console.log(`Maior Valor: ${maiorValor}`);
console.log(`Menor Valor: ${menorValor}`);


function swapRowWithColumn(matrix: number[][], row: number, col: number) {
  for (let i = 0; i < n; i++) {
    let aux = matrix[row][i];
    matrix[row][i] = matrix[i][col];
    matrix[i][col] = aux;
  }
}

function swapDiagonals(matrix: number[][]) {
  for (let i = 0; i < n; i++) {
    let aux = matrix[i][i];
    matrix[i][i] = matrix[i][n - 1 - i];
    matrix[i][n - 1 - i] = aux;
  }
}

swapRowWithColumn(matrix, 2, 4);
console.log("Matriz apos troca da Linha 2 com a Coluna 4:");
printMatrix(matrix);

swapDiagonals(matrix);
console.log("Troca de diagonal (Principal com Secundária):");
printMatrix(matrix);

swapDiagonals(matrix);
console.log("Troca de diagonal (Secundária com Principal):");
printMatrix(matrix);
