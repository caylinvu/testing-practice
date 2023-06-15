import { capitalize } from "../scripts/capitalize";

test('capitalizes first letter of string', () => {
    expect(capitalize('hello')).toEqual('Hello');
});

test('capitalizes first letter of multiword string', () => {
    expect(capitalize('i like toast')).toEqual('I like toast');
});

test('if already capitalized, string stays the same', () => {
    expect(capitalize('Beans')).toEqual('Beans');
});

test('if all letters are capitalized, string stays the same', () => {
    expect(capitalize('CHEESE')).toEqual('CHEESE');
});

test('if string starts with #, string stays the same', () => {
    expect(capitalize('34dogs')).toEqual('34dogs');
});

test('if string starts with symbol, string stays the same', () => {
    expect(capitalize('!!lollmao')).toEqual('!!lollmao');
});

test('returns "not a string" if invalid data type is entered', () => {
    expect(capitalize(123)).toEqual('not a string');
});