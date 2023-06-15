let calculator = {
    checkArgs(num1, num2) {
        if (typeof num1 != 'number' || typeof num2 != 'number') {
            return false;
        }
        return true;
    },
    add(num1, num2) {
        if (this.checkArgs(num1, num2) == false) {
            return 'please enter valid numbers';
        }
        return num1 + num2;
    },
    subtract(num1, num2) {
        if (this.checkArgs(num1, num2) == false) {
            return 'please enter valid numbers';
        }
        return num1 - num2;
    },
    divide(num1, num2) {
        if (this.checkArgs(num1, num2) == false) {
            return 'please enter valid numbers';
        }
        return num1 / num2;
    },
    multiply(num1, num2) {
        if (this.checkArgs(num1, num2) == false) {
            return 'please enter valid numbers';
        }
        return num1 * num2;
    },
}

export { calculator }