import { calculator } from "../scripts/calculator";

test('addition with positive numbers', () => {
    expect(calculator.add(1, 3)).toBe(4);
});

test('addition with negative numbers', () => {
    expect(calculator.add(-3, -2)).toBe(-5);
});

test('addition with decimal numbers', () => {
    expect(calculator.add(.1, .2)).toBeCloseTo(.3);
});

test('addition with a 0 value', () => {
    expect(calculator.add(0, 5)).toBe(5);
});

test('subtraction with positive numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test('subtraction with negative numbers', () => {
    expect(calculator.subtract(-3, -2)).toBe(-1);
});

test('division with positive numbers', () => {
    expect(calculator.divide(15, 3)).toBe(5);
});

test('division with negative numbers', () => {
    expect(calculator.divide(-10, 2)).toBe(-5);
});

test('multiplication with positive numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});

test('multiplication with negative numbers', () => {
    expect(calculator.multiply(5, -2)).toBe(-10);
});

test('returns "please enter valid numbers" if invalid data type is entered', () => {
    expect(calculator.add('aldk', -2)).toEqual('please enter valid numbers');
});

test('returns "please enter valid numbers" if multiple invalid data types are entered', () => {
    expect(calculator.subtract('sdfsd', [3])).toEqual('please enter valid numbers');
});