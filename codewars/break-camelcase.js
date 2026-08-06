/* Complete the solution so that the function will break up camel casing, using a space between words. */

function solution(string) {
    if (string.length > 0) {
        let result = "";
        for (let i = 0; i < string.length; i++) {
            if (string[i] === string[i].toUpperCase()) {
                result += ' ' + string[i];
            } else {
                result += string[i];
            }
        }
        return result;
    }
    return "";
}