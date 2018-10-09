// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let start = 0;
  let i = 0;
  let arrayChunk = [];
  let chunkedArray = [];

  while (i < array.length) {
    console.log("start" + start)
    arrayChunk.push(array[i]);

    if (i === start + size || i < size && i === size-1 || i === array.length-1) {
      console.log("i" + i)
      chunkedArray.push(arrayChunk);
      arrayChunk = [];
      start = i;
    }
    i++;
  }
  return chunkedArray;
}

module.exports = chunk;
