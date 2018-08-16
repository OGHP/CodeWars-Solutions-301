'use strict';

function insertDash(num) {
    let newString = '';
    for (let i = 0; i < num.length; i++) {
        //% returns the remainder left over when divided by 2
        //checking to see if the first number is ODD
        newString = newString + num[i];
        //% returns the remainder left over when divided by 2
            //checking to see if the first number is ODD
        if (num[i] % 2 !== 0) {
            if (num[i + 1] % 2 !== 0) {
                newString = newString + '-';
            };
        };
    };
    return newString;
