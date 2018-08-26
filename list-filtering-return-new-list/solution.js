function filter_list(list) {

    //create empty array to hold new values
    let newArray = [];

    //loop over the array
    for (let i = 0; i < list.length; i++) {

        //while looping, use "Number.isInteger()" method
        //to determine whether the passed value is an integer
        if (Number.isInteger(list[i]) === true) {

            //if the passed value is an integer, push it to the new array
            newArray.push(list[i]);
        }
    }
    return newArray;
};


// cleaner solution would have been to use filter if I could have figured out how:
// const filter_list = list => list.filter(element => typeof element === 'number');
