'use strict';

const binarySearch = (arr, item) => {
  let low = 0;
  let high = arr.length - 1;

  if (arr.length === 0) return -1; // проверка вне цикла

  while (low <= high) {

    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];

    if (guess === item) return mid;

    if (guess > item) high = mid - 1;

    if (guess < item) low = mid + 1;
  }
  return -1;
}

console.log(binarySearch([2, 4, 6, 7, 8, 69], 8))
console.log(binarySearch([2, 4, 6, 7, 8, 69], 90))