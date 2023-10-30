//we can also export multiple functions after defining

function sum(a, b) {
  const result = a + b
  return result
}

function sub(a, b) {
  const result = a - b
  return result
}

exports.addition = sum
exports.subtract = sub
