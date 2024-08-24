/*
  NOME DE UM VENDEDOR 
   SALARIO
   TOTOAL DE VENDAS (MES $$)
   COMISSAO : 15% SOBRE SUAS VENDAS

*/




interface Employee {
  seller: string;
  wage: number;
  price: number;
  totalSales: number;
}

const employee: Employee = {
  seller: "Maycon",
  wage: 1445.50,
  price: 50.00,
  totalSales: 10
};

const report = (employee: Employee): void => {
  // ele ganha 15% sobre cada venda
  let totalCommission: number = employee.totalSales * (0.15 * employee.price)
  let finalWage: number = employee.wage + totalCommission;
  
  console.log("Nome : " + employee.seller)
  console.log("Salário Fixo : " + employee.wage)
  console.log("Salário Final : " + finalWage)
}

report(employee);
