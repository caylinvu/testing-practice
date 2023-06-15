function analyzeArray(arr) {
    if (Array.isArray(arr) == false) {
        return 'not a valid array';
    }
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != 'number') {
            return 'not a valid array';
        }
    }

    let length = arr.length;
    let average = parseInt(arr.reduce((prev, cur) => prev + cur, 0) / length);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { average, min, max, length }
}

export { analyzeArray }