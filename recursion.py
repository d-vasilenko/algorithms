def f(arr):
    if not arr:
        return 0
    return arr[0] + f(arr[1:])

def e(arr):
    if not arr:
        return 0
    return 1 + e(arr[1:])    

def k(arr):
    if len(arr) == 1:
        return arr[0]
    sub_max = k(arr[1:])
    return arr[0] if arr[0] > sub_max else sub_max


data = [1, 3, 4, 5]


print(e(data))

print(f(data))
print(sum(data))
print(k(data))