// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reverseStr = n.toString().split('').reverse().join('');
  return parseInt(reverseStr) * Math.sign(n);
}


module.exports = reverseInt;

// function reverseInt(n) {
//   const reverseStr = n.toString().split('').reverse().join('');
//   return n >= 0 ? parseInt(reverseStr, 10) : -(parseInt(reverseStr, 10));
// }
