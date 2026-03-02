
def find_smallest_index(arr: list[int]) -> int:
    """Функция ищет наименьший эллемент в массиве O(n)"""
  
    if not arr:
        return -1
  
    smallest = arr[0]
    smallest_index = 0

    for i in range(1, len(arr)):
        if smallest > arr[i]:
            smallest = arr[i]
            smallest_index = i
    return smallest_index


def selection_sort(arr: list[int]) -> list[int]:
    """Сортировка выбором O(n^2)"""

    new_arr = []

    if not arr:
        return []

    for i in range(0, len(arr)):
        smallest_index = find_smallest_index(arr)
        new_arr.append(arr.pop(smallest_index))
  
    return new_arr

if __name__ == "__main__":

    data = [44, 32, 4, 23, 59, 2, 98]

    print(find_smallest_index(data))
    print(selection_sort(data))

