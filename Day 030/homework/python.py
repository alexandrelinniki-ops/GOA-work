# 0) https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/python
# 1) https://www.codewars.com/kata/515e271a311df0350d00000f/train/python
# 2) https://www.codewars.com/kata/55b42574ff091733d900002f/train/python
# 3) https://www.codewars.com/kata/555086d53eac039a2a000083/train/python
# 4) https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python

# 0)
def filter_list(l):
    result = []
    for x in l:
        if type(x) == int:
            result.append(x)
    return result

# 1)
def square_sum(numbers):
    result = 0
    for x in numbers:
        result += x ** 2
    return result

# 2)
def friend(x):
    names = []
    for name in x:
        if len(name) == 4:
            names.append(name)
    return names

# 3)
def lovefunc( flower1, flower2 ):
    if flower1 % 2 == 0 and flower2 % 2 == 1:
        return True
    elif flower1 % 2 == 1 and flower2 % 2 == 0:
        return True
    else:
        return False
    
# 4)
def disemvowel(string):
    result = ""
    vowels = "aeiouAEIOU"
    for i in string:
        if i not in vowels:
            result += i
    return result

