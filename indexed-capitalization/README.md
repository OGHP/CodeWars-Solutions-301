# Code Wars Challenge:
https://www.codewars.com/kata/indexed-capitalization

## Problem domain
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:
capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.

The input will be a lowercase string with no spaces and an array of digits.

## Solution:
1. Create an empty spring to hold the final string
2. loop over the string
3. compare string to indices with .includes()
4. capitalize if the letter in the string is also in the array
5. if it is not, leave the letter as is (not capitalized)

### Author:
Heather Palmer & Daniel Frey
