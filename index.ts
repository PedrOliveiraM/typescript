const users = [
  { id: 1, name: 'Alice', age: 28, active: true, score: 85 },
  { id: 2, name: 'Bob', age: 34, active: false, score: 56 },
  { id: 3, name: 'Charlie', age: 25, active: true, score: 92 },
  { id: 4, name: 'David', age: 22, active: false, score: 71 },
  { id: 5, name: 'Eve', age: 30, active: true, score: 64 }
];

const upperCaseNames = users.map(user => user.name.toUpperCase())
console.log(upperCaseNames)

const activatedUsers = users.filter(users => users.active)
console.log(activatedUsers)

// 3. reduce
const averageAge = users.reduce((total, user) => total + user.age, 0) / users.length;
// nao sei 
const averageScoreUsers = users.reduce((averageScore, users) => (averageScore += users.score), 0)
console.log(averageScoreUsers)


const firstUserGreaterScore = users.find(user => user.score > 80)
console.log(firstUserGreaterScore)

const someUsersDesactivated = users.some(user => !user.active)
console.log(someUsersDesactivated)

const areOfLegalAge = users.every(user => user.age >= 18)
console.log(areOfLegalAge)

// nao sei 
// 7. sort
const sortedByScore = [...users].sort((a, b) => b.score - a.score);
const ascScoreUsers = users.sort(user => user.score,)
console.log(ascScoreUsers)

users.forEach(user => console.log(`eae, bem-vindo ${user.name}`))

//nao sei
//const charlieUsers = users.map(user => user.name == users.includes("charlie"))
// 9. includes
const userNames = users.map(user => user.name);
const hasCharlie = userNames.includes('Charlie');

const threeFirstUsers = users.slice(0, 3)
console.log(threeFirstUsers)