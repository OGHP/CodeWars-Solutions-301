function mutateMyStrings(stringOne, stringTwo) {
    let stringOneArray = stringOne.split('');
    let stringTwoArray = stringTwo.split('');
    let mutatedString = [];
    mutatedString = [stringOneArray.join('')];
    for (let i = 0; i < stringOneArray.length; i++) {
        if (stringOneArray[i] !== stringTwoArray[i]) {
            stringOneArray[i] = stringTwoArray[i];
            mutatedString.push(stringOneArray.join(''));
        }
    }
    return mutatedString.join('\n') + '\n';
}

// solution:
// 1. turn each string into individual letters
// 2. create an empty array to hold the new strings
// 3. loop through each string of individual letters
// 4. check if they are looking at the same letter,
//   if so...
// 5. make stringOne[i] become stringTwo[i] with a loop
// 6. create a new line each time
