/*

Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
Any whitespace at the end of the line should also be stripped out.
Example:

Given an input string of:
apples, pears # and bananas
grapes
bananas !apples

The output expected would be:
apples, pears
grapes
bananas

 */

function solution(text, markers) {
    const lines=text.split('\n');
    const result=lines.map(line =>
    {
        let minIndex=-1;
        for (const marker of markers){
            const index=line.indexOf(marker);
            if(index !== -1){
                if(minIndex === -1 || index < minIndex){
                    minIndex=index;
                }
            }
        }
        let proccessedLine=line;
        if(minIndex !== -1){
            proccessedLine=line.substring(0, minIndex);
        }
        return proccessedLine.trimEnd();
    })

    return result.join('\n');
}