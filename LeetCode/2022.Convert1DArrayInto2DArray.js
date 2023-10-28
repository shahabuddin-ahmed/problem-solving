/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (m * n !== original.length) {
    return [];
  }
  const arrayMxN = [];
  for (let i = 0; i < original.length; i += n) {
    arrayMxN.push(original.slice(i, i + n));
  }
  return arrayMxN;
};

const result = construct2DArray([1, 2, 3, 4, 5, 6], 2, 3);
console.log(result);
