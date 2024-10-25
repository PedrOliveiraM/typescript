function reverseString(s: string[]): void {
  let start = 0;
  let last = s.length - 1;

  while (start < last) {
    // Armazena temporariamente o valor de s[start]
    const aux = s[start];
    // Troca os valores de s[start] e s[last]
    s[start] = s[last];
    s[last] = aux;

    // Move os ponteiros em direção ao centro
    start++;
    last--;
  }

  console.log(s);
}

reverseString(['h', 'e', 'l', 'l', 'o']); // Saída esperada: ['o', 'l', 'l', 'e', 'h']
