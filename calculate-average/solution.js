function find_average(array) {
    //reduce callback is a, b (to sort)
    //reduce adds elements, starting with initial sum of 0 (2nd arg in reduce)
    const sum = array.reduce((a, b) => a + b, 0);
    //sum is divided by the array's length to get the average
    return sum / array.length;
};
