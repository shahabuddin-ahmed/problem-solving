/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const sMap = new Map();
    const tMap = new Map();
    const sLength = s.length;
    const tLength = t.length;
    let isAnagram = true;
    s = s.toLowerCase();
    t = t.toLowerCase();

    for (let i = 0; i < sLength; i++) {
        if (sMap.get(s.charAt(i))) {
            sMap.set(s.charAt(i), sMap.get(s.charAt(i)) + 1);
        } else {
            sMap.set(s.charAt(i), 1);
        }
    }

    for (let i = 0; i < tLength; i++) {
        if (tMap.get(t.charAt(i))) {
            tMap.set(t.charAt(i), tMap.get(t.charAt(i)) + 1);
        } else {
            tMap.set(t.charAt(i), 1);
        }
    }

    sMap.forEach((value, key) => {
        if (tMap.get(key) !== value) {
            isAnagram = false;
        }
    });

    if ((!s && t) || sLength !== tLength) {
        isAnagram = false;
    }

    return isAnagram;
};