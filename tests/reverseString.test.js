import { reverseString } from "../scripts/reverseString";

test('reverses single word string', () => {
    expect(reverseString('rainbow')).toEqual('wobniar');
});

test('reverses multiple word string', () => {
    expect(reverseString('i love cats')).toEqual('stac evol i');
});

test('reverses string with capital letters', () => {
    expect(reverseString('HoWdY')).toEqual('YdWoH');
});

test('reverses string of numbers', () => {
    expect(reverseString('123456789')).toEqual('987654321');
});

test('reverses string of letters and numbers', () => {
    expect(reverseString('859toast3')).toEqual('3tsaot958');
});

test('reverses string with symbols', () => {
    expect(reverseString('!!!e9 *&$ 46')).toEqual('64 $&* 9e!!!');
});

test('returns "not a string" if invalid data type is entered', () => {
    expect(reverseString(123)).toEqual('not a string');
});