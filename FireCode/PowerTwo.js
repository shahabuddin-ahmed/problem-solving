function isPowerOfTwo(num) {
    return Math.log2(num) % 1 === 0 ? true : false;
}

const result = isPowerOfTwo(4);
console.log(result);


/**
 *  top solutions
 * 
 * isPowerOfTwo(num) {
    return (num & (num - 1)) === 0;
  }
 */