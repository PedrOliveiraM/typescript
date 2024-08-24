// ler nome do aluno
// nota as 3 provas
// saida : nome do aluno  e media

let student: string = "Sabrina"
let grade: number[] = [7, 9, 10]

const average = (grades: number[], student: string): void => {

  let total: number = 0
  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }

  console.log("Nome do aluno:" + student)
  console.log("Media do aluno:" + (total / grades.length).toFixed(1)) // arredonda
}

average(grade, student)