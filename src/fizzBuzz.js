// Keid's fizzBuzz sample.
const fizzBuzz = num => {
  const arry = [];
  for (i = 1; i <= num; i++) {
    i % 15 === 0
      ? arry.push('FizzBuzz')
      : i % 3 === 0
        ? arry.push('Fizz')
        : i % 5 === 0 ? arry.push('Buzz') : arry.push(i);
  }
  return arry;
};

module.exports = fizzBuzz;
