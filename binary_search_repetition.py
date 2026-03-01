from typing import Tuple

def binary_search(arr: list[int], item: int) -> Tuple[bool, int]: # add list[int]
  low = 0
  high = len(arr) - 1

  if not arr:
    return False, -1

  while low <= high:
    midd = (low + high) // 2
    guess = arr[midd]

    if guess == item:
      return True, midd
    elif guess > item:
      high = midd - 1
    else:
      low = midd + 1
  
  return False, -1


print(binary_search([2, 4, 6, 7, 8, 69], 8))