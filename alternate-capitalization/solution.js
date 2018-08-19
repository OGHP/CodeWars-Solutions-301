function capitalize(s) {
    //empty string hold the values of the even capitalized letters
    let evenString = '';
    //empty string to hold the values of the odd capitalized letters
    let oddString = '';
    //turn the provided string into an array
    let newString = s.split("");

    for (let i = 0; i < s.length; i++) {
        //the remainder of i is divided by 2.
        //if i is an EVEN number, the result will be 0
        //and if it is an odd number, the result will be 1.
        //This if statement checks to see if i is an even number.
        if (i % 2 === 0) {
            //if it's even, make it uppercase and add to the evenString
            // += adds the value of the uppercase string
            // and assigns the result to evenString variable.
            evenString += s[i].toUpperCase();
        } else {
            // += adds the value of the string index
            // and assigns the result to evenString variable (not as uppercase).
            evenString += s[i];
        }
    }
    for (let i = 0; i < s.length; i++) {
        //the remainder of i is divided by 2.
        //if i is an ODD number, the result will be 0
        //and if it is an even number, the result will be 1.
        //This if statement checks to see if i is an odd number.
        if (i % 2 === 1) {
            //if it's odd, make it uppercase and add to the oddString
            // += adds the value of the uppercase string
            // and assigns the result to oddString variable.
            oddString += s[i].toUpperCase();
        } else {
            // += adds the value of the string index
            // and assigns the result to evenString variable (not as uppercase).
            oddString += s[i];
        }
    }

    return [evenString, oddString];
};

