'use strict';

/**
 * Функция возвращает индекс наименьшего эллемента O(n)
 * @param {number[]} arr 
 * @returns {number} индекс наименьшего значения
 */
const findSmallest = (arr) => {
  
  if (arr.length === 0) return -1;
  
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

/**
 * Функция сортирует массив выбором O(n^2)
 * @param {number[]} arr 
 * @returns {number[]} отсортированный массив
 */
const selectionSort = (arr) => {
  
  const newArr = [];
  const originalLength = arr.length; // не меняеться сохраняем оригинальную длину массива
  
  if (arr.length === 0) return [];
  
  for (let i = 0; i < originalLength; i++) {
    let smallest_index = findSmallest(arr);
    newArr.push(arr.splice(smallest_index, 1)[0]);
  }
  return newArr;
}

let data = [44, 32, 4, 23, 59, 2, 98];

console.log(findSmallest(data));
console.log(selectionSort(data));
