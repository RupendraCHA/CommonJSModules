const studentDetails = require('./expression')

const personDetails = new studentDetails('Subhashini', 23)

console.log(personDetails)
console.log(`My name is ${personDetails.name}.`)
console.log(`I am ${personDetails.age} years old.`)
