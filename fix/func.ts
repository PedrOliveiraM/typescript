function welcome(name: string): void {
  return console.log(`Seja bem-vindo ${name}`);
}


function max(num1: number, num2: number): number {
  return num1 >= num2 ? num1 : num2;
}

let maiorValor = max(10, 15);

console.log(maiorValor);

// ARROW FUNCTION

const maximo = (num1: number, num2: number): number => {
  return num1 >= num2 ? num1 : num2;
}