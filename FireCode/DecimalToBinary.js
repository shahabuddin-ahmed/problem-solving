function toBinary(decimal) {
    return Number(decimal).toString(2);
}

const result = toBinary(25);
console.log(result);


// top solutions

/**
 * 
 * toBinary(decimal) {
    if (decimal <= 1) {
      return decimal.toString(2);
    }
    return this.toBinary(Math.floor(decimal / 2)) + decimal % 2;
  }
 * 
 */