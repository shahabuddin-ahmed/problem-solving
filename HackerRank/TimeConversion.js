'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
	const hours = Number(s.slice(0, 2));
	if (s.endsWith("PM")) {
		if (hours === 12) {
			return s.slice(0, 8);
		} else {
			return `${hours + 12}${s.slice(2, 8)}`;
		}
	} else {
		if (hours === 12) {
			return `00${s.slice(2, 8)}`;
		} else {
			return s.slice(0, 8);
		}
	}
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);
	console.log(result);

    ws.write(result + '\n');

    ws.end();
}