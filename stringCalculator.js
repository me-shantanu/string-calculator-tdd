function add(numbers) {
  if (numbers === '') return 0

  let delimiter = /,|\n/
  if (numbers.startsWith('//')) {
    let parts = numbers.split('\n')
    delimiter = new RegExp(parts[0].slice(2))
    numbers = parts[1]
  }

  return numbers.split(delimiter).reduce((sum, num) => sum + parseInt(num), 0)
}

module.exports = add
