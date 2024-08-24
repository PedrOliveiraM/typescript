let x: number = 5
let y: number = 3
let z: number = 3

if (x < y) {
  if (y < z) {
    console.log(x)
  } else if (x < z) {
    console.log(x)
  } else {
    console.log(z)
  }
} else {
  if (x < z) {
    console.log(y)
  } else if (y < z) {
    console.log(y)
  } else {
    console.log(z)
  }
}