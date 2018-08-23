let gimme = function (inputArray) {
    return inputArray.indexOf(inputArray.slice().sort(function (a, b) {
        return a - b;
    })[1]);
};
