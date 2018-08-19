# Code Wars Challenge:
https://www.codewars.com/kata/regex-validate-pin-code

## Problem domain
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.

eg:
validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false

## Solution:
1. Write a function that will validate what a user enters for a PIN to see if it matches the requirements
2. Using regex syntax, check that the PIN entered is a digit, using [0-9]
3. Using regex syntax, check that the PIN entered is either 4 or 6 digits long, using {4}|{6}
4. Run your function against the tests

### Author:
Heather Palmer
