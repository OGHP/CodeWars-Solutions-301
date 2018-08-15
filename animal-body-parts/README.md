# Code Wars Challenge:
https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/solutions/javascript

## Problem domain
You have an array consisting of (head, body, tail)
Head and tail are in each other’s place
So head needs to move to index[2] of the array and
Tails to index[0].
Body stays in the same place.

## Solution:
First you need to check the CodeWars test arrays just in case they throw a curveball
Write a function fixTheMeerkat with parameter arr
Since the ‘body’ will stay in place in an array of 3 strings you could reverse the entire array
So you could chain the method of .reverse() onto the input array in the return of your function


### Collaborators:
Heather Palmer, Trevor Stam, and Diego Ramos
