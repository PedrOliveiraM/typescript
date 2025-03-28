
function isPalindrome(x: number): boolean {
  let value = x.toString()

  let invert = value.toString().split('').reverse().join('');

  if (value == invert) return true

  return false
};