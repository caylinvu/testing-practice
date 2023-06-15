function reverseString(string) {
    if (typeof string != 'string') {
        return 'not a string';
    }
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}

export { reverseString }