# 0) https://www.codewars.com/kata/5a941f4e1a60f6e8a70025fe/train/python
# 1) https://www.codewars.com/kata/5813d19765d81c592200001a/train/python
# 2) https://www.codewars.com/kata/580a4734d6df748060000045/train/python
# 3) https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python
# 4) https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python

# 0)
def odd_ball(arr):
    odd_index = None

    # Find index of the odd word
    for i in range(len(arr)):
        if isinstance(arr[i], str) and len(arr[i]) % 2 == 1:
            odd_index = i
            break

    # Check if any number equals that index
    for item in arr:
        if isinstance(item, int) and item == odd_index:
            return True

    return False

# 1)
def dont_give_me_five(start,end):
    count = 0
    for i in range(start, end + 1):
        if "5" not in str(i):
            count += 1
    return count

# 2)
def is_sorted_and_how(arr):
    if arr == sorted(arr):
        return "yes, ascending"
    elif arr == sorted(arr, reverse=True):
        return "yes, descending"
    else:
        return "no"
    
# 3)
def get_count(sentence):
    vowels = "aeiou"
    count = 0

    for char in sentence:
        if char in vowels:
            count += 1

    return count

# 4)
def duplicate_encode(word):
    word = word.lower()
    result = ""

    for char in word:
        if word.count(char) == 1:
            result += "("
        else:
            result += ")"

    return result

