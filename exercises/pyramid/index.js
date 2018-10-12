// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


function pyramid(n, row = 0, column = 0, level="") {
  const numberOfColumns = (n * 2) -2

  if (row === n) {
    return;
  }

  if(column > numberOfColumns) {
    console.log(level)
    return pyramid(n, row + 1);
  }

  if (column >= Math.floor(numberOfColumns/2 - row) && column <= Math.floor(numberOfColumns/2 + row)) {
    level += "#";
  } else {
    level += " "
  }

  return pyramid(n, row, column + 1, level);
}
// function pyramid(n) {
// const numberOfColumns = (n * 2) - 2;
// let level = "";
//
// for (let row = 0; row < n; row++) {
//   for (let column = 0; column <= numberOfColumns; column++) {
//     if (column >= Math.floor(numberOfColumns/2 - row) && column <= Math.floor(numberOfColumns/2 + row)) {
//       level += "#";
//     } else {
//       level += " ";
//     }
//    }
//    console.log(level);
//    level = "";
//   }
// }

module.exports = pyramid;
