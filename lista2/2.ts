
let note1: number = 9;
let note2: number = 5;

let averageNotes: number = (note1 + note2) / 2

if (averageNotes >= 0 && averageNotes < 4)
  console.log("Reprovado !\nMédia = ", averageNotes)
else if (averageNotes >= 4 && averageNotes < 7)
  console.log("Exame !\nMédia = ", averageNotes)
else
  console.log("Aprovado !\nMédia = ", averageNotes)