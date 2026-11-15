# 0)https://www.codewars.com/kata/52597aa56021e91c93000cb0

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


# 1)https://www.codewars.com/kata/541c8630095125aba6000c00

def digital_root(n):
    while n >= 10:
        total = 0

        for digit in str(n):
            total += int(digit)

        n = total

    return n


# 2)https://www.codewars.com/kata/5842df8ccbd22792a4000245

def expanded_form(num):
    s = str(num)
    return ' + '.join(d + '0' * (len(s) - i - 1) for i, d in enumerate(s) if d != '0')


# 3)https://www.codewars.com/kata/554ca54ffa7d91b236000023

def delete_nth(order,max_e):
    counts = {}
    result = []
    
    for num in order:
        counts[num] = counts.get(num, 0) + 1
        if counts[num] <= max_e:
            result.append(num)
            
    return result


# 4)https://www.codewars.com/kata/5839edaa6754d6fec10000a2

def find_missing_letter(chars):
    for i in range(len(chars) - 1):
        if ord(chars[i+1]) - ord(chars[i]) > 1:
            return chr(ord(chars[i]) + 1)


# 5)https://www.codewars.com/kata/5552101f47fc5178b1000050 

def dig_pow(n, p):
    s_num = str(n)
    total_sum = 0
    
    for i in range(len(s_num)):
        digit = int(s_num[i])
        total_sum += digit ** (p + i)
        
    if total_sum % n == 0:
        return total_sum // n
    else:
        return -1


# 6)https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec




# 7)https://www.codewars.com/kata/6a885cb8c299e537f3570f86 
