# 0) https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/python
# 1) https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/python
# 2) https://www.codewars.com/kata/515decfd9dcfc23bb6000006

# 0)
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
    
# 1)
def duplicate_count(s):
    return len([c for c in set(s.lower()) if s.lower().count(c)>1])

# 2)
def is_valid_IP(ip):
    parts = ip.split(".")
    if len(parts) != 4:
        return False
    for i in parts:
        if not i.isdigit():
            return False

        if i[0] == '0' and len(i) > 1:
            return False

        if int(i) < 0 or int(i) > 255:
            return False
    return True