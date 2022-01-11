function compress(input) {
    const length  = input.length;
	let newStr = "", count = 1;
	for (let i = 0; i < length; i++) {
		if (input[i] === input[i+1]) {
			count++;
		} else {
			newStr += count === 1 ? input[i] : input[i] + count;
			count = 1;
		}
	}
	return newStr;
}

const result = compress("AAAAaaabbbbbcccc");
console.log(result);


// top solutions

// compress(input) {
//     let builder = "";
//     let accumulator = 0;
//     for (let i = 0; i < input.length; i++) {
//       accumulator += 1;
//       if (i + 1 === input.length || input[i] !== input[i + 1]) {
//         builder += input[i];
//         if (accumulator > 1) {
//           builder += accumulator;
//         }
//         accumulator = 0;
//       }
//     }
//     return builder;
// }