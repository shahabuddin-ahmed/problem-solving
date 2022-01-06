const str = "AAAbbCCCD";
const length  = str.length;
let newStr = "", count = 1;
for (let i = 0; i < length -1; i++) {
	if (str[i] === str[i+1]) {
		count++;
		newStr += str[i] + count;
		i++;
	} else {
		count = 0;
	}
}

console.log(newStr);