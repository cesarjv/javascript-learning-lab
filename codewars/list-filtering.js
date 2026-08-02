/* In this kata you will create a function that takes a list of non-negative integ
ers and strings and returns a new list with the strings filtered out.*/


/**
 2
 * @param {(number|string)[]} l
 3
 */
function filter_list(l) {
    return l.filter(item => typeof item === 'number');
}

