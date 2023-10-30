const {addition, subtract} = require('./expression')

const addition1 = addition(5, 8)
const subtract1 = subtract(8, 4)

console.log(`Sum of numbers ${addition1}`)
console.log(`Diffrence of numbers ${subtract1}`)
