def f(arr):
    if not arr == 0:
        return 0
    return arr[0] + f(arr[1:])

def e(arr):
    if not arr == 0:
        return 0
    return 1 + e(arr[1:])    




data = [1, 3, 4, 5]


print(e(data))

print(f(data))
print(sum(data))