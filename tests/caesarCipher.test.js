import { caesarCipher } from "../scripts/caesarCipher";

test('base case (a-z)', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toEqual('bcdefghijklmnopqrstuvwxyza');
});

test('encrypts a string with 1 shift', () => {
    expect(caesarCipher('bravo', 1)).toEqual('csbwp');
});

test('encrypts a string with 2 shifts', () => {
    expect(caesarCipher('bravo', 2)).toEqual('dtcxq');
});

test('encrypts a string with 3 shifts', () => {
    expect(caesarCipher('bravo', 3)).toEqual('eudyr');
});

test('string with 0 shifts returns same string', () => {
    expect(caesarCipher('bravo', 0)).toEqual('bravo');
});

test('encrypts a multi-word string with 1 shift', () => {
    expect(caesarCipher('i want a taco', 1)).toEqual('j xbou b ubdp');
});

test('encrypts a multi-word string with 4 shifts', () => {
    expect(caesarCipher('i want a taco', 4)).toEqual('m aerx e xegs');
});

test('encrypts a string with punctuation', () => {
    expect(caesarCipher('do you like waffles? i do.', 2)).toEqual('fq aqw nkmg ychhngu? k fq.');
});

test('encrypts a string with uppercase letters', () => {
    expect(caesarCipher('hOwdY pArTnEr', 3)).toEqual('krzgb sduwqhu');
});

test('encrypts a string with a large number of shifts', () => {
    expect(caesarCipher('too many shifts', 25)).toEqual('snn lzmx rghesr');
});

test('encrypts a string with 26 shifts', () => {
    expect(caesarCipher('i stay the same', 26)).toEqual('i stay the same');
});

test('returns "numbers not allowed in string" if number is included in string', () => {
    expect(caesarCipher('i have 3 cats', 1)).toEqual('numbers not allowed in string');
});

test('returns "numbers not allowed in string" if number 0 is included in string', () => {
    expect(caesarCipher('i have 0 turtles', 1)).toEqual('numbers not allowed in string');
});

test('returns "please enter valid string" if other data type is entered', () => {
    expect(caesarCipher(12345, 1)).toEqual('please enter valid string');
});

test('returns "please enter valid number for shift" if other data type is entered', () => {
    expect(caesarCipher('pepporoni pizza', 'bees')).toEqual('please enter valid number for shift');
});