# Code Wars Challenge:
https://www.codewars.com/kata/alternate-capitalization/javascript

## Problem domain
Given a string, capitalize the letters that occupy even indexes and then odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

example:
'codewars' will change to both 'CoDeWaRs' and 'cOdEwArS'

## Solution:
1. Write a function that will capitalize the even index of a string and then the odd index of a string
2. Create 2 variables, 1 that will hold the even letters by their index position and 1 that will hold the odd
3. Create a third variable to hold the even and odd letters based on index, by using the spilt() method to make an array out of the strings of letters that will be provided
4. Use a for loop to go through each letter to determine its index position
5. Check to see if the index position is an even number
6. If the index position is an even number, add it to the even index as a capital letter
7. if the index position is an odd number, just add it to the even index as a lowercase letter
8. Do steps 4-7 to check for an odd number
9. Run your function against the tests

### Author:
Heather Palmer
