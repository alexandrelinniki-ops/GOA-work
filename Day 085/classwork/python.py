# 1) https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/python
# 2) https://www.codewars.com/kata/517abf86da9663f1d2000003/train/python
# 3) https://www.codewars.com/kata/69aff09e67eb0ef1d5be0d73/train/python
# 4) https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/python
# 5) https://www.codewars.com/kata/56541980fa08ab47a0000040/train/python
# 6) https://www.codewars.com/kata/5656b6906de340bd1b0000ac

# 1)
def open_or_senior(data):
    res = []
    for i in data:
        if i[0] >= 55 and i[1] > 7:
            res.append("Senior")
        else:
            res.append("Open")
    return res

# 2)
def to_camel_case(text):
    if not text:
        return ""
    words = text.replace("-", "_").split("_")
    return words[0] + "".join(word.capitalize() for word in words[1:])

# 3)
def thanos_sort(arr):
    if not arr:
        return 0

    if arr == sorted(arr):
        return len(arr)

    n = len(arr)
    keep = (n + 1) // 2  

    return max(
        thanos_sort(arr[:keep]),
        thanos_sort(arr[-keep:])
    )

# 4)
def move_zeros(lst):
    result = []
    count = 0
    for i in lst:
        if i != 0:
            result.append(i)
        elif i == 0:
            count += 1
    for x in range(0, count):
        result.append(0)
    return result

# 5)
def printer_error(s):
    errors = 0
    for i in s:
        if i < 'a' or i > 'm':
            errors += 1

    return f"{errors}/{len(s)}"
    
# 6)
def longest(s1, s2):
    return "".join(sorted(set(s1 + s2)))