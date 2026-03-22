# 0) https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/python
# 1) https://www.codewars.com/kata/514b92a657cdc65150000006/train/python
# 2) https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python
# 3) https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python

# 0)
vaporcode = lambda s: "  ".join(s.replace(" ", "").upper())

# 1)
solution = lambda n: sum(x for x in range(n) if x % 3 == 0 or x % 5 == 0) if n > 0 else 0

# 2)
find_it = lambda s: sum(set([i for i in s if s.count(i) % 2 == 1]))

# 3)
duplicate_encode = lambda s: "".join("(" if s.lower().count(c) == 1 else ")" for c in s.lower())
    