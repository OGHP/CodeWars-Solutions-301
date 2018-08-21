function isNice(arr) {
    let nicePoint = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if ((arr[i] !== arr[j]) && ((arr[i] === (arr[j] + 1)) || (arr[i] === (arr[j] - 1)))) {
                nicePoint++;
                break;
            }
        }
    }
    return nicePoint === arr.length && arr.length !== 0 ? true : false;
}
