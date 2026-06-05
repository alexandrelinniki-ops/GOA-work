# 1) https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python

def find_it(seq):
    for num in seq:
        if seq.count(num) % 2 == 1:
            return num
        

# 2) https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/python

def DNA_strand(dna):
    complement = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    }

    result = ""

    for nucleotide in dna:
        result += complement[nucleotide]

    return result


# 3) https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python

def high_and_low(numbers):
    nums = list(map(int, numbers.split()))
    return f"{max(nums)} {min(nums)}"


# 4) https://www.codewars.com/kata/5208f99aee097e6552000148/train/python

def solution(s):
    result = ""

    for i in s:
        if i.isupper():
            result += " "
        result += i

    return result


# 5) https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/python

def max_diff(lst):
    if len(lst) < 2:
        return 0
    return max(lst) - min(lst)
