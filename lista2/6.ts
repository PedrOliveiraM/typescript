let num1: number = 13
let num2: number = 23

let opt: number = 2

switch (opt) {
  case 1:
    // media
    console.log((num1 + num2) / 2)
    break;

  case 2:
    // diferença do maior para menor 
    num1 > num2 ? console.log(num1 - num2) : console.log(num2 - num1)
    console.log()
    break;

  case 3:
    // produto de 2 numeros
    console.log(num1 * num2)
    break;

  default:
    console.log("Opção inválida")
    break;
}