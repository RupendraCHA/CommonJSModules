const {personDetails, personEducation} = require('./expression')

const details = new personDetails('Rupendra', 24, 'Ongole')
const education = new personEducation('B.Tech', 'GIET')

console.log(details)
console.log(education)

console.log(
  `My name is ${details.name} and age is ${details.age}. I am living in ${details.city}.`,
)
console.log(
  `I am studied in ${education.college} college with ${education.degree} as a degree.`,
)
