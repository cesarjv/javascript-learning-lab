/* Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indexes of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be positive or negative integers; target will always be the sum of two different items from that array).
* */

function twoSum(numbers, target) {
    const map=new Map;
    let result=0;
    for (let i=0; i <numbers.length; i++){
        result=target- numbers[i];
        if (map.has(result)){
            return [i,map.get(result)];
        }
        else {
            map.set(numbers[i], i);
        }
    }
}