//we can export multiple classes while defining

exports.personDetails = class studentDetails {
  constructor(name, age, city) {
    this.name = name
    this.age = age
    this.city = city
  }
}

exports.personEducation = class education {
  constructor(degree, college) {
    this.degree = degree
    this.college = college
  }
}
