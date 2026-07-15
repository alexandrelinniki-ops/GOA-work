# 1) https://www.codewars.com/kata/563b662a59afc2b5120000c6
# 2) https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/python
# 3) https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
# 4) https://www.codewars.com/kata/57f8ff867a28db569e000c4a
# 5) https://www.codewars.com/kata/5878520d52628a092f0002d0

# 1)
def nb_year(p0, percent, aug, p):
    years = 0
    while p0 < p:
        p0 = int(p0 + p0 * percent / 100 + aug)
        years += 1
    return years

# 2)
def likes(names):
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return f"{names[0]} likes this"
    elif len(names) == 2:
        return f"{names[0]} and {names[1]} like this"
    elif len(names) == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        return f"{names[0]}, {names[1]} and {len(names)-2} others like this"
    
# 3)
def first_non_repeating_letter(s):
    s_lower = s.lower()
    for i in s_lower:
        if s_lower.count(i) == 1:
            return s[s_lower.index(i)]

    return ""

# 4)
def kebabize(st):
    result = ""
    for char in st:
        if char.isdigit():
            continue

        if char.isupper():
            result += "-"
            result += char.lower()
        else:
            result += char

    return result.lstrip("-")

# 5)
def string_transformer(s):
    words = s.split(" ")
    words = words[::-1]
    
    return " ".join(words).swapcase()
