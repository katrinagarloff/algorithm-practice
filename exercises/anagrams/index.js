// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

  function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
  }

  function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
  }
  // function anagrams(stringA, stringB) {
  //   aCharMap = buildCharMap(stringA)
  //   bCharMap = buildCharMap(stringB)
  //
  //   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
  //     return false;
  //   }
  //
  //   for (let char in aCharMap) {
  //     if (aCharMap[char] !== bCharMap[char]) {
  //
  //       return false;
  //     }
  //   }
  //
  //   return true;
  // }
  //
  // function buildCharMap(str) {
  //   const charMap = {};
  //
  //   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
  //     charMap[char] = charMap[char] + 1 || 1;
  //   }
  //
  //   return charMap;
  // }

// function anagrams(stringA, stringB) {
//   const aSplit = stringA.replace(/[^\w]/g, "").toLowerCase().split("");
//   const bSplit = stringB.replace(/[^\w]/g, "").toLowerCase().split("");
//   const aHash = {};
//   const bHash = {};
//   let isAnagram = true;
//
//
//  for (char of aSplit) {
//    aHash[char] ? aHash[char] += 1 : aHash[char] = 1;
//  }
//
//  for (char of bSplit) {
//    bHash[char] ? bHash[char] += 1 : bHash[char] = 1;
//
//  }
//
// if (Object.keys(aHash).length !== Object.keys(bHash).length) {
//   return false;
// } else {
//   for (char in aHash) {
//     if (aHash[char] !== bHash[char]) {
//       isAnagram = false;
//     }
//   }
// }
// return isAnagram;
// }

module.exports = anagrams;
