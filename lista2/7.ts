// func de aumento de salario ( 500 reais ) ==> 30%


let salary: number = 499

const salaryAdjustment = (salary: number) => {
  if (salary < 500) {
    console.log(salary * 1.30)
  } else {
    console.log("Esse funcionário não tem direito a reajuste")
  }
}

salaryAdjustment(salary)