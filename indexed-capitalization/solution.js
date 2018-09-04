function capitalize(s, arr) {
  //create a place to hold the resulting new string
  let capitalizeString = '';
  //look over the provided string
  for (let i = 0; i < s.length; i++) {
    //check to see if the array includes something
    if (arr.includes(i)) {
      //if true...
      //take the string and where i is, make it uppercase
      //charAt() method returns a new string consisting of the single
      //UTF-16 code unit located at the specified offset into the string
      capitalizeString += s.charAt(i).toUpperCase();
    } else {
      //if false....
      //leave the letter in the string as is
      capitalizeString += s.charAt(i);
    }
  }
  return capitalizeString;
};
