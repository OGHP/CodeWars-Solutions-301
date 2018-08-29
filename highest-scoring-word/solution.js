function high(x) {
    //split at each word
    let splitString = x.split(' ');

    //sort each word by length
    let sortTheArray = splitString.sort((a, b) => wordValue(b) - wordValue(a));
    return sortTheArray[0];
};

//take that sorted array (words sorted by length)
function wordValue(word) {
    //assign a score to each word, start at 0
    let scoreForWord = 0;
    //loop over each letter in the word
    for (let i in word) {
        //for each letter we're assigning a score based on the value of each letter
        //using the UNICODE value
        scoreForWord += ((word.charCodeAt(i)) - 96);
    }
    //return the score
    return scoreForWord;
};
