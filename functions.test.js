const {stringLength, reverseString, capitalize} = require("./functions.js");
const Calculator = require("./Calculator.js")

test('To test stringLength function', () => {
  expect(stringLength('loremipsum')).toBe(10);
})

test('The function must return an error message', () => { 
  expect(() => stringLength('')).toThrow(Error);
})

test('The function must return an error message', () => {
  
  expect(() => stringLength('loremipsum12')).toThrow(Error);
})

test('The reversed word must be roma', () => {
  const expected = reverseString('amor');
  expect(expected).toBe('roma');
})

describe('calculator add test', () => {
  const calc = new Calculator();
  test('5 plus 4 must be 9', () => {
    expect(calc.add(5,4)).toBe(9);
  })
  test('12 plus 10 must be 22', () => {
    expect(calc.add(12,10)).toBe(22);
  })
  test('25 plus 32 must be 57', () => {
    expect(calc.add(25,32)).toBe(57);
  })
})

describe('calculator subtract test', () => {
  const calc = new Calculator();
  test('5 minus 4 must be 1', () => {
    expect(calc.subtract(5,4)).toBe(1);
  })
  test('12 plus 10 must be 2', () => {
    expect(calc.subtract(12,10)).toBe(2);
  })
  test('25 plus 2 must be 23', () => {
    expect(calc.subtract(25,2)).toBe(23);
  })
})

describe('calculator multiply test', () => {
  const calc = new Calculator();
  test('5 plus 4 must be 20', () => {
    expect(calc.multiply(5,4)).toBe(20);
  })
  test('12 plus 10 must be 120', () => {
    expect(calc.multiply(12,10)).toBe(120);
  })
  test('25 plus 2 must be 50', () => {
    expect(calc.multiply(25,2)).toBe(50);
  })
})

describe('calculator divide test', () => {
  const calc = new Calculator();
  test('5 divided by 5 must be 1', () => {
    expect(calc.divide(5,5)).toBe(1);
  })
  test('12 divided by 6 must be 2', () => {
    expect(calc.divide(12,6)).toBe(2);
  })
  test('25 divided by 0.5 must be 50', () => {
    expect(calc.divide(25,0.5)).toBe(50);
  })
})

describe('test for capitalize function', () => {
  test('the function turn hello into Hello', () => {
    expect(capitalize('hello')).toBe('Hello')
  })  
})