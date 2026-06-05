# 1)
def get_count(sentence):
    vowels = "aeiou"
    count = 0
    for i in sentence:
        if i in vowels:
            count += 1
    return count

# 2)
def solution(string):
    return string[::-1]

# 3)
def make_negative( number ):
    if number > 0:
        return -number
    return number

# 4)
def filter_list(l):
    result = []
    for x in l:
        if type(x) == int:
            result.append(x)
    return result

# 5)
def magic_sum(arr):
    result = 0
    for i in arr:
        if i % 2 != 0 and "3" in str(i):
            result += i
    return result

# 6)
def disemvowel(string):
    return "".join(i for i in string if i not in "aeiouAEIOU")

# 7)
def digital_root(n):
    while n >= 10:
        total = 0

        for digit in str(n):
            total += int(digit)

        n = total

    return n

# 8)
def get_middle(s):
    middle = len(s) // 2
    
    if len(s) % 2 == 0:
        return s[middle - 1:middle + 1]
    else:
        return s[middle]
