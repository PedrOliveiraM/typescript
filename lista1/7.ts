// valor lido em dolar
// mostrar valor em real
// valor da cotação do dolar e quantidade de dolars 

let valueUSD: number = 50;
let cota: number = 5.58;

const convertCurrency = (value: number, cota: number) => {
  // recebo o valor em dolar e converto pra real
  console.log(value * cota);
}

convertCurrency(valueUSD, cota)



