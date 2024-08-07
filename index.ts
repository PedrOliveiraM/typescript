//READY: SUM ARRAY
function sumArray(numbers: number[]): number {
  let sum: number = 0;

  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

const array = [5, 6, 7, 9, 10]; // 37

console.log(sumArray(array));

//READY: INTERFACES

interface User {
  name: string;
  username: string;
  email: string;
}

function welcome(user: User): string {
  const { name, username, email } = user;

  return `Welcome ${name}, is your user: ${username}.Please check your email: ${email}`;
}

const newUser: User = {
  name: 'pedro',
  username: 'pedro123',
  email: 'pedropucmont@gmail.com',
};

console.log(welcome(newUser));

//READY: union types

// uma função que recebe string | number;

function processInput(input: string | number): number {
  // utilização do typeof;

  if (typeof input === 'string') return input.length;
  else return input * 2;
}

const input = '7';
console.log(processInput(input));

//READY: CLASS
class People {
  constructor(public name: string, public age: number) {}

  getName(): string {
    return this.name;
  }
}

let student = new People('Pedro', 23);

console.log(student.age);
console.log(student.name);
