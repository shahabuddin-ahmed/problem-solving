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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
	const map = new Map();
	let uniqeVal = 0;

	a.forEach(value => {
		if (map.get(value)) {
			map.set(value, map.get(value) + 1);
		} else {
			map.set(value, 1);
		}
	});

	a.forEach(value => {
		if (map.get(value) === 1) {
			uniqeVal = value;
		}
	});
	return uniqeVal;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);
	console.log(result);

    ws.write(result + '\n');

    ws.end();
}