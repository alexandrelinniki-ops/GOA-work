# 1) https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/python
# 2) https://www.codewars.com/kata/55cbd4ba903825f7970000f5
# 3) https://www.codewars.com/kata/57a0885cbb9944e24c00008e
# 4) https://www.codewars.com/kata/568d0dd208ee69389d000016/train/python

# 1)
def count_sheep(n):
    result = ""
    for i in range(1, n+1):
        result += f"{i} sheep..."
    return result

# 2)
def get_grade(s1, s2, s3):
    whole = (s1 + s2 + s3) / 3
    if whole >= 90 and whole <= 100:
        return "A"
    elif whole >= 80:
        return "B"
    elif whole >= 70:
        return "C"
    elif whole >= 60:
        return "D"
    elif whole < 60:
        return "F"
    
# 3)
def remove_exclamation_marks(s):
    return s.replace("!","")

# 4)
def rental_car_cost(d):
    if d >= 7:
        return d * 40 - 50
    elif d >= 3:
        return d * 40 - 20
    else:
        return d * 40
    
    