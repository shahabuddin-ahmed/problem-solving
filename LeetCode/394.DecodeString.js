/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let stack = [];
    let currString = "";
    let currentNumber = 0;
    for (let char of s) {
        if (char === "[") {
            stack.push(currString);
            stack.push(currentNumber);
            currString = "";
            currentNumber = 0;
        } else if (char === "]") {
            let num = stack.pop();
            let prevString = stack.pop();
            currString = prevString + currString.repeat(num);
        } else if (/\d/.test(char)) {
            currentNumber = currentNumber * 10 + parseInt(char);
            console.log(char, currentNumber);
        } else {
            currString += char;
        }
    }
    return currString;
};
