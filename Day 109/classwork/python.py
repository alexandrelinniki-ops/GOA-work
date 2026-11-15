# 1) https://www.codewars.com/kata/583989556754d6f4c700018e/train/python



def multiples(a: int, b: int, limit: int) -> list[int]:
    mult = []
    
    for i in range(1, limit + 1):
        if i % a == 0 and i % b == 0:
            mult.append(i)
            
    return mult


# 2) https://www.codewars.com/kata/6a885cb8c299e537f3570f86/train/python




# 3) https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/python

def find_next_square(sq):
    root = int(sq ** 0.5)

    if root * root == sq:
        return (root + 1) ** 2
    return -1


# 4) https://www.codewars.com/kata/5d65fbdfb96e1800282b5ee0/train/python

def wrap(height, width, length):
    sides = sorted([height, width, length])
    return 2 * (sides[1] + sides[2]) + 2 * (sides[0] + sides[1]) + 20


# 5) https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/python

def sum_of_minimums(numbers):
    return sum(min(i) for i in numbers)


# 6) https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/python

def max_tri_sum(numbers):
    return sum(sorted(set(numbers))[-3:])


# 7) https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

def up_array(arr):
    if not arr or any(n < 0 or n > 9 for n in arr):
        return None

    arr[-1] += 1

    for i in range(len(arr) - 1, 0, -1):
        if arr[i] > 9:
            arr[i] = 0
            arr[i - 1] += 1

    if arr[0] > 9:
        arr[0] = 0
        arr.insert(0, 1)

    return arr


# 8) https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

def open_or_senior(data):
    res = []
    for i in data:
        if i[0] >= 55 and i[1] > 7:
            res.append("Senior")
        else:
            res.append("Open")
    return res