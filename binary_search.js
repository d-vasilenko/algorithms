'use strict';
/**
 * 
 * @param {number[]} arr 
 * @param {number} searchItem 
 * @returns {number} index of searchItem
 */
const binarySearch = (arr, searchItem) => {
  if (arr.length === 0) return -1;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let midd = Math.floor((low + high) / 2);
    let guess = arr[midd];
    if (guess === searchItem) {
      return midd;
    } else if (guess > searchItem) {
      high = midd - 1;
    } else {
      low = midd + 1;
    }
  }
  return -1;
}


console.log(binarySearch([2, 4, 6, 7, 49, 89, 100], 894));