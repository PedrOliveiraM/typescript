// alafabeto
// retornar todas as letras ate aquela letra

function getAlfabeto(value: number) {
  if (value < 1 || value > 26)
    return "Valor tem que ser que 0 e menor 26"

  const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const elements: string[] = []

  for (let index = 0; index < value; index++) {
    elements.push(alfabeto[index])
  }
  return elements;
}

console.log(getAlfabeto(27))



// outra solução?
function getAlphabetSubset(n: number): string[] {
  const alfabeto: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  return alfabeto.slice(0, n);
}

// Exemplo de uso
console.log(getAlphabetSubset(5)); // Output: ['a', 'b', 'c', 'd', 'e']
