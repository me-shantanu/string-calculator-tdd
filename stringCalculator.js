function add(numbers) {
  if (numbers === '') return 0

  let delimiter = /,|\n/
  if (numbers.startsWith('//')) {
    let parts = numbers.split('\n')
    delimiter = new RegExp(parts[0].slice(2))
    numbers = parts[1]
  }

  let nums = numbers.split(delimiter).map(Number)
  let negatives = nums.filter((n) => n < 0)

  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`)
  }

  return nums.reduce((sum, num) => sum + num, 0)
}

module.exports = add
