'use strict';

const f = arr => {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + f(arr.slice(1));
}

const e = arr => {
  if (arr.length === 0) {
    return 0;
  }
  return 1 + e(arr.slice(1));
}

const data = [1, 2, 3, 4, 5];

console.log(f(data));
console.log(e(data));