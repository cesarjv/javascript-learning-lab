/* Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
The next words should be always capitalized. */


function toCamelCase(str){

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-' || str[i] === '_') {
            str = str.slice(0, i) + str[i + 1].toUpperCase() + str.slice(i + 2);
        }
    }
    return str;
}

