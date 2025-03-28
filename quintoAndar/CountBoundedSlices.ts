function solution(K: number, A: number[]): number {
  let count = 0;
  let left = 0;
  let right = 0;

  while (right < A.length) {
    // Determinar o máximo e mínimo da janela A[left..right]
    let minVal = Math.min(...A.slice(left, right + 1));
    let maxVal = Math.max(...A.slice(left, right + 1));

    // Se a condição for violada, movemos left para restringir a janela
    while (maxVal - minVal > K) {
      left++;
      minVal = Math.min(...A.slice(left, right + 1));
      maxVal = Math.max(...A.slice(left, right + 1));
    }

    // Contamos todos os slices válidos terminando em "right"
    count += (right - left + 1);

    // Se atingimos o limite, retornamos imediatamente
    if (count > 1_000_000_000) return 1_000_000_000;

    // Expandimos a janela
    right++;
  }

  return count;
}
