function capitalize(string) {
    if (typeof string != 'string') {
        return 'not a string';
    }
    let capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalizedString;
}

export { capitalize }