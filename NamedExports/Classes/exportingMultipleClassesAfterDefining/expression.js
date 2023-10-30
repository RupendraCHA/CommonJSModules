class personDetails {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

class education {
  constructor(college, city) {
    this.college = college
    this.city = city
  }
}

exports.person = personDetails
exports.studies = education
