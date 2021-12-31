function isPairAnagram(s1, s2) {
    const s1Map = new Map();
    const s2Map = new Map();
	const s1Length = s1.length;
	const s2Length = s2.length;
	let isAnagram = true;
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();

	for (let i=0; i < s1Length; i++) {
		if (s1Map.get(s1.charAt(i))) {
			s1Map.set(s1.charAt(i), s1Map.get(s1.charAt(i)) + 1);
		} else {
			s1Map.set(s1.charAt(i), 1);
		}
	}

	for (let i=0; i < s2Length; i++) {
		if (s2Map.get(s2.charAt(i))) {
			s2Map.set(s2.charAt(i), s2Map.get(s2.charAt(i)) + 1);
		} else {
			s2Map.set(s2.charAt(i), 1);
		}
	}

	s1Map.forEach((value, key) => {
		if (s2Map.get(key) !== value) {
			isAnagram = false;
		}
	});

	if (!s1 && s2 || s1Length !== s2Length) {
		isAnagram = false;
	}

	return isAnagram;
}

const result = isPairAnagram("Col", "cOl");
console.log(result);

// top solutions

const countsMap = new Map();

// solutions one
// [...s1.toUpperCase()].forEach(c => {
// 	countsMap.set(c, countsMap.get(c) === undefined ? 1 : countsMap.get(c) + 1);
// });

// [...s2.toUpperCase()].forEach(c => {
// 	countsMap.set(c, countsMap.get(c) === undefined ? -1 : countsMap.get(c) - 1);
// });

// return [...countsMap.values()].find(v => v !== 0) === undefined;


// solutions two
// return s1.toLowerCase().split("").sort().join("") === s2.toLowerCase().split("").sort().join("");