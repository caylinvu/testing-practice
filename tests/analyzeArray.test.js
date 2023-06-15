import { analyzeArray } from "../scripts/analyzeArray";

test('analyze array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('analyze array with multiples of same numbers', () => {
    expect(analyzeArray([3,3,5,9,5,2,4,4,4])).toEqual({
        average: 4,
        min: 2,
        max: 9,
        length: 9
    });
});

test('return "not a valid array" if another data type is entered', () => {
    expect(analyzeArray("hello")).toEqual('not a valid array');
});

test('return "not a valid array" if an array of non-numbers is entered', () => {
    expect(analyzeArray(['a','b','c','d','e'])).toEqual('not a valid array');
});