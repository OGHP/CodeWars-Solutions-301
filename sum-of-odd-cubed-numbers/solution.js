function cubeOdd(arr) {
    //check to see if the array has numbers
    if (arr.every(num => typeof num === 'number')) {
        //Math.pow() function returns the base to the exponent power, that is, baseexponent
        //check if number divided by 2, has a remainder
        //map over each number that remains to cube it
        //use reduce to sort and get the sum of a & b, starting at 0
        return arr.filter(num => num % 2).map(num => Math.pow(num, 3)).reduce((a, b) => a + b, 0);
    };
};
