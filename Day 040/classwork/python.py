# 0) https://www.codewars.com/kata/57241e0f440cd279b5000829/train/python

# 1) https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/python

# 2) https://www.codewars.com/kata/570597e258b58f6edc00230d/train/python

# 0)
def sum_mul(n, m):
    if n <= 0 or m <= 0:
        return "INVALID"

    total = 0
    for i in range(n, m, n):
        total += i

    return total


# 1)
def area_or_perimeter(l , w):
    return l * w if l == w else (l + w) * 2

# 2)
def array(string):
    return " ".join(string.split(",")[1:-1]) or None