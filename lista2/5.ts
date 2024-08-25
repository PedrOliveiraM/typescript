let number1: number = 13
let number2: number = 23

let option: number = 2

switch (option) {
  case 1:
    // media
    console.log((number1 + number2) / 2)
    break;

  case 2:
    // diferença do maior para menor 
    number1 > number2 ? console.log(number1 - number2) : console.log(number2 - number1)
    console.log()
    break;

  case 3:
    // produto de 2 numeros
    console.log(number1 * number2)
    break;

  case 4:
    if (number2 == 0) {
      console.log("Erro !")
      break;
    }
    console.log(number1 / number2)
    break;
  default:
    console.log("Opção inválida")
    break;
}