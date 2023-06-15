let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let cipher = 'bcdefghijklmnopqrstuvwxyza'

function getShiftedChar(char, shift) {
    if (shift == 0) {
        return char;
    } else if (char.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
        return char;
    }

    let currentIndex = alphabet.indexOf(char.toLowerCase());
    let shiftedChar = '';
    for (let i = 1; i <= shift; i++) {
        shiftedChar = cipher[currentIndex];
        currentIndex = alphabet.indexOf(shiftedChar);
    }
    return shiftedChar;
}

function numberCheck(string) {
    let nums = /\d/g;
    return nums.test(string);
}

function caesarCipher(string, shift) {
    if (typeof string != 'string') {
        return 'please enter valid string';
    } else if (typeof shift != 'number') {
        return 'please enter valid number for shift';
    } else if (numberCheck(string) == true) {
        return 'numbers not allowed in string';
    } 

    let encryptedString = '';
    for (let i = 0; i < string.length; i++) {
        encryptedString += getShiftedChar(string[i], shift);
    }
    return encryptedString;
}

export { caesarCipher }