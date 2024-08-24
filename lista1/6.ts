// input : temp em celsius
// converter em fahrenheit 
// F = (9 * C + 160)/ 5
// conversao
let tempC: number = 15;

const convertToFahrenheit = (temp: number): void => {
  let tempF: number = (9 * temp + 160) / 5

  console.log(temp, " C equivale a: ", tempF, " F")
}

convertToFahrenheit(tempC)