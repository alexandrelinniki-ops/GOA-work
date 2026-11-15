# 1) https://www.codewars.com/kata/54f9f4d7c41722304e000bbb/train/python

def first_dup(s):
    for i in range(len(s)):
        if s[i] in s[i + 1:]:
            return s[i]

    return None


# 2) https://www.codewars.com/kata/5dd259444228280032b1ed2a/train/python

import math

def solve(s, g):
    if s % g != 0:
        return -1

    a = g
    b = s - g

    if math.gcd(a, b) == g:
        return (a, b)

    return -1


# 3) https://www.codewars.com/kata/583989556754d6f4c700018e/train/python

def multiples(a: int, b: int, limit: int) -> list[int]:
    mult = []
    
    for i in range(1, limit + 1):
        if i % a == 0 and i % b == 0:
            mult.append(i)
            
    return mult


# 4) https://www.codewars.com/kata/5d65fbdfb96e1800282b5ee0/train/python

def wrap(height, width, length):
    sides = sorted([height, width, length])
    
    return 2 * (sides[2] + sides[0]) + 2 * (sides[1] + sides[0]) + 20


# 5) https://www.codewars.com/kata/5ff2093d375dca00170057bc/train/python

def count_min_rotations(dice):
    opposite = {1: 6, 6: 1, 2: 5, 5: 2, 3: 4, 4: 3}

    minimum = len(dice)

    for num in dice:
        count = 0

        for d in dice:
            if d == num:
                continue
            elif d == opposite[num]:
                count += 2
            else:
                count += 1

        minimum = min(minimum, count)

    return minimum