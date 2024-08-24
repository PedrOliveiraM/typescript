// receber um valor depositado
// valor do rediomento apos um mes 
// juros fixo de 0.70% ao mes 

let depositValue: number = 50000;
let mouths: number = 1;
let fees: number = 0.70;

const savingsYield = (value: number, mouths: number, fees: number) => {
  console.log((value * mouths * (fees / 100)).toFixed(2))
}

savingsYield(depositValue, mouths, fees)