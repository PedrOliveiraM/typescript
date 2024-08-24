// reveba o preço de custo de um produto e mostre o valor de venda
// aumento de acordo com percentual 


let price: number = 45.00

let percent: number = 50

const calculateFinalPrice = (price: number, percent: number) => {
  console.log((price + (price * (percent / 100))).toFixed(2))
}

calculateFinalPrice(price, percent)