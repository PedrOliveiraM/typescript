let salario: number = 499
let percent: number = 30


const salaryAdjustmentByPercent = (salario: number, percent: number) => {
  console.log("Novo salário : ", salario + (salario * (percent / 100)))
}

salaryAdjustmentByPercent(salario, percent)
