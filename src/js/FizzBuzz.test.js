const { FizzBuzz } = require("./FizzBuzz");

test('convert 3 to "Fizz"', () => {
  const fizzBuzz = new FizzBuzz();
  expect(fizzBuzz.convert(3)).toBe("Fizz");
});

test('convert 5 to "Buzz"', () => {
  const fizzBuzz = new FizzBuzz();
  expect(fizzBuzz.convert(5)).toBe("Buzz");
});

test('convert number % 5 ===0 to "FizzBuzz"', () => {
  const fizzBuzz = new FizzBuzz();
  expect(fizzBuzz.convert(15)).toBe("FizzBuzz");
});
test('convert number % 3 ===0 to "FizzBuzz"', () => {
  const fizzBuzz = new FizzBuzz();
  expect(fizzBuzz.convert(15)).toBe("FizzBuzz");
});
