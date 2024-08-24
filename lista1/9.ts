// produtos com 5 prestações sem juros
// valor da compra 
// mostrar valor das prestações



let value: number = 300.00
function howManyInstallments(price: number) {
  console.log((price / 5).toFixed(2));
}

howManyInstallments(value)